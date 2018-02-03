import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import GameInfo from '../components/GameInfo/GameInfo';

configure({adapter: new Adapter() });

describe('GameInfo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameInfo wins={3} losses={4} draws={4} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a game-info class', () => {
    expect(wrapper.hasClass('game-info')).toBeTruthy();
  });

  it('should render the win score', () => {
    expect(wrapper.find('.game-wins').html()).toEqual('<div class="game-wins">Wins:  <span class="wins-color">3</span></div>');
  });

  it('should render the loss score', () => {
    expect(wrapper.find('.game-losses').html()).toEqual('<div class="game-losses">Losses:  <span class="losses-color">4</span></div>');
  });

  it('should render the draw score', () => {
    expect(wrapper.find('.game-draws').html()).toEqual('<div class="game-draws">Draws:  <span class="draws-color">4</span></div>');
  });
});