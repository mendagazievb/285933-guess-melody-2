import React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/WelcomeScreen';

export const App = (props) => {
  const {gameTime, errorCount} = props;

  return (
    <WelcomeScreen
      gameTime={gameTime}
      errorCount={errorCount}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
};
