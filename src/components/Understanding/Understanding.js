import React, { Component } from 'react';
import './Understanding.css';
import {connect} from 'react-redux';

class Understanding extends Component {
  state = {
    Understanding: 1
  };

  handleNext = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'UPDATE_UNDERSTANDING', payload: this.state.Understanding });
    this.props.history.push('/Support');
  }

  render() {
    return (
      <div className="Understanding">
        <h1>How well are you understanding the content?</h1>
          <form>
            <label for="Understanding">Understanding? </label>
            <input type="number" min="1" max="5" id="Understanding" required onChange={(e) => this.setState({ Understanding: e.currentTarget.value })} value={this.state.Understanding}></input>
            <input type="submit" value="Next" onClick={this.handleNext}/>
          </form>
      </div>
    );
  }
}

export default connect()(Understanding);