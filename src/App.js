import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gael's Profile </h1>
        </header>
        <p className="App-intro">
          You will learn about Gael's career as a developer, the programming languages he masters, etc.
        </p>

          <a href="www.profile.gaelmusi.com"> Click here</a>

      </div>
    );
  }
}

export default App;
