import React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/WelcomeScreen';

export const App = (props) => {
  const {gameTime, errorCount, clickHandler} = props;

  return (
    <WelcomeScreen
      gameTime={gameTime}
      errorCount={errorCount}
      clickHandler={clickHandler}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  clickHandler: PropTypes.func,
};
