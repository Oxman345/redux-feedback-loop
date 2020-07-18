import React, { Component } from 'react';
import axios from 'axios';
import './FeedbackForm.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

class FeedbackForm extends Component {
  state = {
    feedback: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
    }
  }

  handleNext = () => {
    console.log('In handleNext')
  }

  render() {
    return (
      <div className="FeedbackForm">
        <h1>How are you feeling today?</h1>
          <form>
            <label for="feeling">feeling?</label>
            <input type="number" id="feeling" required></input>
            <input type="submit" value="Next" onClick={this.handleNext}/>
          </form>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
  reduxState
})
export default connect(putReduxStateOnProps)(FeedbackForm);