import React, { Component } from 'react';
import './Feeling.css';
import {connect} from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: 1
  };

  handleNext = () => {
    this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state.feeling });
    this.props.history.push('/Understanding');
  }

  render() {
    return (
      <div className="Feeling">
        <h1>How are you feeling today?</h1>
          <form>
            <label for="feeling">feeling?</label>
            <input type="number" min="1" max="5" id="feeling" required onChange={(e) => this.setState({ feeling: e.currentTarget.value })} value={this.state.feeling}></input>
            <input type="submit" value="Next" onClick={this.handleNext}/>
          </form>
      </div>
    );
  }
}

export default connect()(Feeling);