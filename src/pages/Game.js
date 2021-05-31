import React from 'react';
import '../styles/index.css';

import BackButton from '../components/BackButton';

const Game = ({mode}) => {

  return (
    <div>
      <h1> Game </h1>
      <span> Current mode selected: {mode} </span>

      <p> Coming Soon </p>

      <BackButton />
    </div>
  );

};

export default Game;