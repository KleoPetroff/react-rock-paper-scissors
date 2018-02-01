import React from 'react';
import PropTypes from 'prop-types';

import './GameInfo.css';

const GameInfo = ({wins, losses, draws}) => (
  <div className='game-info'>
    <div className='game-wins'>
      Wins: {' '}
      <span className='wins-color'>{wins}</span>
    </div>
    <div className='game-draws'>
      Draws: {' '}
      <span className='draws-color'>{draws}</span>
    </div>
    <div className='game-losses'>
      Losses: {' '}
      <span className='losses-color'>{losses}</span>
    </div>
  </div>
);

GameInfo.propTypes = {
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
  draws: PropTypes.number.isRequired
}

export default GameInfo;
