import React, { Component } from 'react';
import './Support.css';
import {connect} from 'react-redux';

class Support extends Component {
  state = {
    Support: 1
  };

  handleNext = () => {
    this.props.dispatch({ type: 'UPDATE_Support', payload: this.state.Support });
    this.props.history.push('/Comments');
  }

  render() {
    return (
      <div className="Support">
        <h1>How well are you being supported?</h1>
          <form>
            <label for="Support">Support?</label>
            <input type="number" min="1" max="5" id="Support" required onChange={(e) => this.setState({ Support: e.currentTarget.value })} value={this.state.Support}></input>
            <input type="submit" value="Next" onClick={this.handleNext}/>
          </form>
      </div>
    );
  }
}

export default connect()(Support);