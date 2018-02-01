/**
 * Create rules map and return the state value which should be incremented
 * @param playerChoice - on one of the three possible choices - paper, rock, scissors
 * @param computerChoice - the random generated computer choice
 * @returns {string} - the value, corresponding to the state score
 */
export function getWinner(playerChoice, computerChoice) {
  const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
  }

  if (playerChoice === computerChoice) return 'draws'
  if (computerChoice === rules[playerChoice]) return 'wins';
  else return 'losses';
}

/**
 * Get random choice from an array of possible choices (rock/paper/scissors)
 * @returns {string} - the random generated score
 */
export function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * choices.length)];
}