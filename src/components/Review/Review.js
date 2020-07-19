import React, { Component } from 'react';
import './Review.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {
  

  handleSubmit = () => {
    axios({
      method: 'POST',
      url: '/review',
      data: this.props.reduxState
      })
      .then((response) => {
          //Send user feedback to server
          console.log('THIS IS FROM OUR POST:', response);
          alert('Submission Successful');
          this.props.history.push('/')
      })
      .catch((error) => {
          console.log('Error saving feedback', error);
          alert('Submission Failed, Try again later.');
      })//end axios
    
    
  }
  
  render() {
    return (
      <div className="Review">
        <h1>Any Review you want to leave?</h1>
          <form>
            <h3>Feelings: {this.props.reduxState.feeling}</h3>
            <h3>Understanding: {this.props.reduxState.understanding}</h3>
            <h3>Support: {this.props.reduxState.support}</h3>
            <h3>Comments: {this.props.reduxState.comments}</h3>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
}) 

export default connect(putReduxStateOnProps)(Review);