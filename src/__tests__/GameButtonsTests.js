import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GameButtons from '../components/GameButtons/GameButtons';

configure({adapter: new Adapter() });

describe('GameButtons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameButtons />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have only three images', () => {
    expect(wrapper.find('div').children().length).toEqual(3);
  });

  it('should have a proper class name', () => {
    expect(wrapper.hasClass('game-buttons')).toBeTruthy();
  });

  it('should have a paper image', () => {
    expect(wrapper.find('.paper-button')).toBeTruthy();
  });

  it('paper image should have an onClick handler', () => {
    expect(wrapper.find('.paper-button').props().onClick).toBeTruthy();
  });

  it('paper image should use the proper image', () => {
    expect(wrapper.find('.paper-button').prop('src')).toEqual('paper.png');
  });

  it('paper image should have an alt attribute', () => {
    expect(wrapper.find('.paper-button').prop('alt')).toEqual('Paper');
  });

  it('should have a rock image', () => {
    expect(wrapper.find('.rock-button')).toBeTruthy();
  });

  it('paper image should have an onClick handler', () => {
    expect(wrapper.find('.rock-button').props().onClick).toBeTruthy();
  });

  it('paper image should use the proper image', () => {
    expect(wrapper.find('.rock-button').prop('src')).toEqual('rock.png');
  });

  it('paper image should have an alt attribute', () => {
    expect(wrapper.find('.rock-button').prop('alt')).toEqual('Rock');
  });


  it('should have a scissors image', () => {
    expect(wrapper.find('.scissors-button')).toBeTruthy();
  });

  it('paper image should have an onClick handler', () => {
    expect(wrapper.find('.scissors-button').props().onClick).toBeTruthy();
  });

  it('paper image should use the proper image', () => {
    expect(wrapper.find('.scissors-button').prop('src')).toEqual('scissors.png');
  });

  it('paper image should have an alt attribute', () => {
    expect(wrapper.find('.scissors-button').prop('alt')).toEqual('Scissors');
  });
});