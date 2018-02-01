import React, { Component } from 'react';

import GameInfo from './GameInfo/GameInfo';

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

        <GameInfo
          wins={this.state.wins}
          losses={this.state.losses}
          draws={this.state.draws}
        />
      </div>

    );
  }
}

export default App;
