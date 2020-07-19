import React, { Component } from 'react';
import axios from 'axios';
import './Review.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Review extends Component {
  render() {
    return (
      <div className="Review">
       
      
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
  reduxState
})
export default connect(putReduxStateOnProps)(Review);