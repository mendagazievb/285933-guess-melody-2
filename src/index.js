import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/App';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  const clickHandler = () => {};

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        clickHandler={clickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
