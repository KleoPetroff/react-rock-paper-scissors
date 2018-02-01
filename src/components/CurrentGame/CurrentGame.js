import React from 'react';
import PropTypes from 'prop-types';

import './CurrentGame.css';

function renderCurrentGameResult(result) {
  if (result === 'wins') {
    return <div className='win-text'>You won! Try again your luck.</div>
  } else if (result === 'losses') {
    return <div className='loss-text'>You lost. But hey, you can always try again.</div>
  } else if (result === 'draws') {
    return <div className='draw-text'>Draw!</div>;
  } else {
    return <div>Make your choice and start the game.</div>;
  }
}

const CurrentGame = ({currentGameResult}) => (
  <div className='current-game'>
    {renderCurrentGameResult(currentGameResult)}
  </div>
);

CurrentGame.propTypes = {
  currentGameResult: PropTypes.string
}

export default CurrentGame;