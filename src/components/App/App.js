import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Review from '../Review/Review';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/Understanding" component={Understanding} />
            <Route exact path="/Support" component={Support} />            
            <Route exact path ="/Comments" component = {Comments}/> 
            <Route exact path="/Review" component={Review} />    
        </Router>
   
        
       
      
      </div>
    );
  }
}

export default App;
