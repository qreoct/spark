import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import BackButton from './BackButton.js';
import LinkButton from './LinkButton.js';

const MenuRouter = ({setPage, setMode}) => {

  const [page, setMenu] = useState('home');

  switch (page) {
  case 'mode':
    return (
      <div>
        <div className="menu__router--container">
          <Link to="/game" onClick={() => {setPage('game'); setMode('icebreakers')}}> <LinkButton key="Icebreakers" title="Icebreakers" subtitle="Get to know anyone!"/> </Link>
          <Link to="/game" onClick={() => {setPage('game'); setMode('deep')}}> <LinkButton key="Deep" title="Deep Questions" subtitle="Go deep!"/> </Link>
          <Link to="/game" onClick={() => {setPage('game'); setMode('this-or-that')}}> <LinkButton key="ThisOrThat" title="This or That" subtitle="Which will you choose?"/> </Link>
          <Link to="/picture" onClick={() => setPage('picture')}> <LinkButton key="Picture" title="Picture" subtitle="Testing Picture API"/> </Link>
        </div>
        <div className="menu__navigation--container">
          <BackButton action={() => setMenu('player')}/>
        </div>
      </div>

    );
  case 'player':
    return (
      <div>
        <div className="menu__router--container">
          <Link to="/solo" onClick={() => setPage('solo')}> <LinkButton key="Solo" title="Solo" subtitle="Self journey"/> </Link>
          <Link to="/" onClick={() => setMenu('mode')}> <LinkButton key="Group" title="Group" subtitle="Group fun!"/> </Link>
          <Link to="/online" onClick={() => setPage('online')}> <LinkButton key="Online" title="Online" subtitle="Play with friends or strangers!"/> </Link>
        </div>
        <div className="menu__navigation--container">
          <BackButton action={() => setMenu('home')}/>
        </div>
      </div>
    );
  default:
    return (
      <div className="menu__router--container">
        <Link to="/" onClick={() => setMenu('player')}> <LinkButton key="Play" title="Play" subtitle="Spark meaningful conversations"/> </Link>
        <Link to="/profile" onClick={() => setPage('profile')}> <LinkButton key="Profile" title="Profile" subtitle="Your profile"/> </Link>
        <Link to="/about" onClick={() => setPage('about')}> <LinkButton key ="About" title="About"/> </Link>
      </div>
    );
  }
};

export default MenuRouter;