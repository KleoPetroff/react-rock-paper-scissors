import {getRandomChoice, getWinner} from "../utils";

describe('Utils', () => {
  it('should generate random choice', () => {
    expect(getRandomChoice()).toMatch(/rock|paper|scissors/);
  });

  it('should return win if the player has won', () => {
    expect(getWinner('rock', 'scissors')).toEqual('wins');
  });

  it('should return a loss if the player has lost', () => {
    expect(getWinner('paper', 'scissors')).toEqual('losses');
  });

  it('should return a draw if the player and the computer has the same choice', () => {
    expect(getWinner('paper', 'paper')).toEqual('draws');
  });
});