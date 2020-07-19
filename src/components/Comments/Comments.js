import React, { Component } from 'react';
import './Comments.css';
import {connect} from 'react-redux';

class Comments extends Component {
  state = {
    Comments: ''
  };

  handleNext = () => {
    this.props.dispatch({ type: 'UPDATE_Comments', payload: this.state.Comments });
    this.props.history.push('/Review');
  }

  render() {
    return (
      <div className="Comments">
        <h1>Any comments you want to leave?</h1>
          <form>
            <label for="Comments">Comments</label>
            <input type="text" id="Comments" onChange={(e) => this.setState({ Comments: e.currentTarget.value })} value={this.state.Comments}></input>
            <input type="submit" value="Next" onClick={this.handleNext}/>
          </form>
      </div>
    );
  }
}

export default connect()(Comments);