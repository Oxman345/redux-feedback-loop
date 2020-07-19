import React, { Component } from 'react';
import axios from 'axios';
import './Comments.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
       
      
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
  reduxState
})
export default connect(putReduxStateOnProps)(Comments);