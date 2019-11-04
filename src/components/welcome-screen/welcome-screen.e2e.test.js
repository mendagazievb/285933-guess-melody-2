import React from 'react';
import {shallow} from 'enzyme';
import {WelcomeScreen} from './WelcomeScreen';

it(`Click to button start game`, () => {
  const clickHandler = jest.fn();

  const app = shallow(<WelcomeScreen clickHandler={clickHandler} />);

  const startButton = app.find(`button`);

  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
