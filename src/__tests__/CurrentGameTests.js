import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrentGame from '../components/CurrentGame/CurrentGame';
import {renderCurrentGameResult} from '../components/CurrentGame/CurrentGame'

configure({adapter: new Adapter() });

describe('CurrentGameTests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentGame />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should return the proper win text when passed the win prop', () => {
    wrapper = shallow(<CurrentGame currentGameResult={'wins'} />);
    expect(wrapper.html()).toEqual('<div class="current-game"><div class="win-text">You won! Try again your luck.</div></div>');
  });

  it('should return the proper loss text', () => {
    wrapper = shallow(<CurrentGame currentGameResult={'losses'} />);
    expect(wrapper.html()).toEqual('<div class="current-game"><div class="loss-text">You lost. But hey, you can always try again.</div></div>');
  });

  it('should return the default text when no prop is passed', () => {
    wrapper = shallow(<CurrentGame currentGameResult={null} />);
    expect(wrapper.html()).toEqual('<div class="current-game"><div>Make your choice and start the game.</div></div>');
  });
});