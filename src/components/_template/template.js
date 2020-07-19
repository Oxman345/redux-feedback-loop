import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
  reduxState
})
export default connect(putReduxStateOnProps)(App);