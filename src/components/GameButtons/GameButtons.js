import React from 'react';
import PropTypes from 'prop-types';

import './GameButtons.css';

import paper from '../../assets/paper.png';
import rock from '../../assets/rock.png';
import scissors from '../../assets/scissors.png';

const GameButtons = (props) => (
  <div className='game-buttons'>
    <img
      className='paper-button'
      onClick={() => props.onPlayerChoiceClick('paper')}
      src={paper} alt='Paper' />

    <img
      className='rock-button'
      onClick={() => props.onPlayerChoiceClick('rock')}
      src={rock} alt='Rock' />

    <img
      className='scissors-button'
      onClick={() => props.onPlayerChoiceClick('scissors')}
      src={scissors} alt='Scissors' />
  </div>
)

GameButtons.propTypes = {
  onPlayerChoiceClick: PropTypes.func
}

export default GameButtons;