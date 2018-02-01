import React, { Component } from 'react';

import GameInfo from './GameInfo/GameInfo';
import GameButtons from './GameButtons/GameButtons';
import CurrentGame from "./CurrentGame/CurrentGame";

import {getRandomChoice, getWinner} from '../utils';

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

    this.onPlayerChoiceClick = this.onPlayerChoiceClick.bind(this);
  }

  onPlayerChoiceClick(choice) {
    const result = getWinner(choice, getRandomChoice());

    this.setState((prevState) => {
      if (result === 'wins') return { wins: prevState[result] + 1 }
      else if (result === 'draws') return { draws: prevState[result] + 1 }
      else if (result === 'losses') return { losses: prevState[result] + 1 }
    });

    this.setState({currentGameResult: result});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.draws !== nextState.draws) return true;
    if (this.state.losses !== nextState.losses) return true;
    if (this.state.wins !== nextState.wins) return true;

    return false;
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

        <GameButtons
          onPlayerChoiceClick={this.onPlayerChoiceClick}
        />

        <CurrentGame
          currentGameResult={this.state.currentGameResult}
        />
      </div>

    );
  }
}

export default App;
