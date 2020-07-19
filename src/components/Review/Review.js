import React, { Component } from 'react';
import './Review.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {
  

  // handleSubmit = () => {
  //   axios({
  //     method: 'POST',
  //     url: '/api/order',
  //     data: customerPost
  //     })
  //     .then((response) => {
  //         //Send user info to server
  //         //Send order total to server
  //         //Send array of pizzas to server
  //         console.log('THIS IS FROM OUR POST:', response);
  //     })
  //     .catch((error) => {
  //         console.log('Error adding customer', error);
  //     })//end axios
    
  //   alert('Submission Successful');
  }
  
  render() {
    return (
      <div className="Review">
        <h1>Any Review you want to leave?</h1>
          <form>
            <h3>Feelings: {this.props.reduxState.feeling}</h3>
            {console.log(this.props.reduxState.feeling)}
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