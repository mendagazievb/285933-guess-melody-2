import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './WelcomeScreen';

Enzyme.configure({adapter: new Adapter()});

it(`Click to button start game`, () => {
  const clickHandler = jest.fn();

  const app = shallow(<WelcomeScreen clickHandler={clickHandler} />);

  const startButton = app.find(`button`);

  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
