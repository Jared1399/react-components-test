import React, { Component } from 'react';
import './App.css';

//components
import Counter from './components/Counter'
import Clock from './components/Clock'

class App extends Component {


  render(){
    return (
      <div className="App">

        <div className="main">

          <div className="inner"><Counter/></div>
          <div className="inner"><Clock/></div>
          <div className="inner"><Counter/></div>

        </div>

        <div className="bottom">B O T T O M</div>

      </div>
    );

  }
  
}

export default App;
