import React, { Component } from 'react';
import { connect } from 'react-redux'

import NavBar from './components/NavBar/NavBar'
import Main from './containers/Main/Main'

class App extends Component {

  render() {

    return (
      <div >
        <NavBar />
        <Main />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
