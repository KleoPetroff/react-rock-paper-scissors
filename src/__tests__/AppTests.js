import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';
import GameInfo from '../components/GameInfo/GameInfo';
import GameButtons from "../components/GameButtons/GameButtons";
import CurrentGame from "../components/CurrentGame/CurrentGame";

configure({adapter: new Adapter() });


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have the app state', () => {
    expect(wrapper.state().currentGameResult).toEqual(null);
    expect(wrapper.state().draws).toEqual(0);
    expect(wrapper.state().losses).toEqual(0);
    expect(wrapper.state().wins).toEqual(0);
  });

  it('should have a onPlayerChoiceClick method', () => {
    expect(wrapper.instance().onPlayerChoiceClick).toBeTruthy();
  });

  it('should have an app class name', () => {
    expect(wrapper.hasClass('app')).toBeTruthy();
  });

  it('should have an h2 element', () => {
    expect(wrapper.find('.title').type()).toEqual('h2');
  });

  it('should have the GameInfo component', () => {
    expect(wrapper.find(GameInfo).length).toEqual(1);
  });

  it('should have the GameButtons component', () => {
    expect(wrapper.find(GameButtons).length).toEqual(1);
  });

  it('should have the CurrentGame component', () => {
    expect(wrapper.find(CurrentGame).length).toEqual(1);
  });
});
