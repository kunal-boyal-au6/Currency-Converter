import React from 'react';

import classes from './Table.module.css';
import Row from './Row/Row'

const table = (props) => {
    console.log(props.value)
    return (
        <div className={classes.Parent}>
            <h1 >Here is the result !</h1>
            <table className={classes.Table}>
                <tbody>
                    <tr className={classes.Header}>
                        <th style={{fontSize:"30px"}}>INR</th>
                        <th style={{ fontSize:"30px" }}>USD</th>
                    </tr>
                    {props.values.map((value, index) => {
                        return <Row inr={value.value} usd={value.convertedValue} key={index} />
                    })}
                </tbody>
            </table>
            <div className={classes.DetailDiv}>
                <h2 className={classes.Details}>Minimum Amount : {props.min} </h2>
                <h2 className={classes.Details}>Maximum Amount : {props.max} </h2>
                <h2 className={classes.Details}>Median : {props.med} </h2>
                <h2 className={classes.Details}>Date : {props.date} </h2>
                <h2 className={classes.Details}>Time : {props.time} </h2>
            </div>
            <form className={classes.Email} onSubmit={props.submit}>
                <input className={classes.Input} required type="email" name="email" placeholder="Enter your email" onChange={props.change} />
                <button className={classes.Btn} onClick={props.submit}>Send Result</button>
            </form>
        </div>

    )
}

export default table