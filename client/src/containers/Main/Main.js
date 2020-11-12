import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// import path from 'path'

// import * as actions from '../../store/actions/actions'
import classes from './Main.module.css';
import Table from '../../components/Table/Table'

class Main extends Component {

    state = {
        csvFilePath: null,
        data: {
            covertedValues: [],
            minimum: null,
            maximum: null,
            median: null,
            date: null,
            time:null
        },
        showTable: false,
        email: ''
    }

    inputChangeHandler = (e) => {
        this.setState({ csvFilePath: e.target.files[0] })
    }

    onUploadFile = async (event) => {
        event.preventDefault()
        try {
            const data = new FormData()
            data.append('fileName', this.state.csvFilePath)
            const response = await axios.post("/convertCurrency", data)
            console.log(response.data)
            const values = {
                covertedValues: response.data.convertedCurrency,
                minimum: response.data.minimum,
                maximum: response.data.maximum,
                median: response.data.median,
                date: response.data.date,
                time:response.data.time
            }
            this.setState({ data: values, showTable: true})
        } catch (error) {
            console.log(error)
        }
    }

    onInputChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("/sendEmail", { email: this.state.email })
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }

    }

    render() {
        return (
            <React.Fragment>
                <form className={classes.Main}>
                    <input type="file" name="csvFile"
                        className={classes.Input}
                        onChange={(event) => this.inputChangeHandler(event)} />
                    <button onClick={(event) => this.onUploadFile(event)}>Upload and convert !</button>
                </form>
                {this.state.showTable ? <Table values={this.state.data.covertedValues}
                    min={this.state.data.minimum}
                    max={this.state.data.maximum}
                    med={this.state.data.median}
                    date={this.state.data.date}
                    time={this.state.data.time}
                    change={(event) => this.onInputChange(event)}
                    submit={(event) => this.onSubmit(event)} /> : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)