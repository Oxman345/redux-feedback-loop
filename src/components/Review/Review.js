import React, { Component } from 'react';
import './Review.css';
import {connect} from 'react-redux';

class Review extends Component {
  state = {
    Review: ''
  };

  handleNext = () => {
    this.props.dispatch({ type: 'UPDATE_Review', payload: this.state.Review });
    this.props.history.push('/Review');
  }

  render() {
    return (
      <div className="Review">
        <h1>Any Review you want to leave?</h1>
          <form>
            <label for="Review">Review</label>
            <input type="text" id="Review" required onChange={(e) => this.setState({ Review: e.currentTarget.value })} value={this.state.Review}></input>
            <input type="submit" value="Next" onClick={this.handleNext}/>
          </form>
      </div>
    );
  }
}

export default connect()(Review);