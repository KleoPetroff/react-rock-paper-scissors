import React, { Component } from 'react';

import './App.css';

const initialState = {
  wins: 0,
  losses: 0,
  draws: 0,
  currentGameResult: null
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className="app">
        <h2 className="title">Rock Paper Scissors</h2>
      </div>

    );
  }
}

export default App;
