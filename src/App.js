import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> Hello React </h1>
          <div className="board">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    );
  }
}

export default App;
