import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import BackButton from './BackButton.js';
import LinkButton from './LinkButton.js';

const MenuRouter = ({setPage, setMode}) => {

  const [menu, setMenu] = useState('home');

  switch (menu) {
  case 'online':
    return (
      <>
        <div className="menu__router--container">
          <Link to="/create" onClick={() => {setPage('create'); setMode('online-room')}}><LinkButton key='Create' title="Create" subtitle="Create your unique room" /></Link>
          <Link to='/join' onClick={() => {setPage('join'); setMode('online-room')}}><LinkButton key='Join' title='Join' subtitle='Join an existing room' /></Link>
          <Link to='/random' onClick={() => {setPage('random'); setMode('online-stranger')}}><LinkButton key='Random' title='Random' subtitle='Join a random room' /></Link>
        </div>
        <div className="menu__navigation--container">
          <BackButton action={() => setMenu('player')}/>
        </div>
      </>
    )
  case 'mode':
    return (
      <>
        <div className="menu__router--container">
          <Link to="/game" onClick={() => {setPage('game'); setMode('story')}}><LinkButton key="Story" title="Story (2 players)" subtitle="10 progressive questions for 2 players!"></LinkButton></Link>
          <Link to="/game" onClick={() => {setPage('game'); setMode('icebreakers')}}> <LinkButton key="Icebreakers" title="Icebreakers" subtitle="Get to know anyone!"/> </Link>
          <Link to="/game" onClick={() => {setPage('game'); setMode('deep')}}> <LinkButton key="Deep" title="Deep Questions" subtitle="Go deep!"/> </Link>
          <Link to="/game" onClick={() => {setPage('game'); setMode('this-or-that')}}> <LinkButton key="ThisOrThat" title="This or That" subtitle="Which will you choose?"/> </Link>
        </div>
        <div className="menu__navigation--container">
          <BackButton action={() => setMenu('player')}/>
        </div>
      </>

    );
  case 'player':
    return (
      <>
        <div className="menu__router--container">
          <Link to="/solo" onClick={() => {setPage('solo'); setMode('solo')}}> <LinkButton key="Solo" title="Solo" subtitle="Daily self reflection"/> </Link>
          <Link to="/" onClick={() => setMenu('mode')}> <LinkButton key="Group" title="Group" subtitle="Questions for sharing"/> </Link>
          <Link to="/" onClick={() => setMenu('online')}> <LinkButton key="Online" title="Online" subtitle="Play with friends or strangers"/> </Link>
        </div>
        <div className="menu__navigation--container">
          <BackButton action={() => setMenu('home')}/>
        </div>
      </>
    );
  default:
    return (
      <div className="menu__router--container">
        <Link to="/" onClick={() => setMenu('player')}> <LinkButton key="Play" title="Play" subtitle="Spark meaningful conversations!"/> </Link>
        <Link to="/profile" onClick={() => {setPage('profile'); setMode('profile')}}> <LinkButton key="Profile" title="Profile" subtitle="Your favourited cards & Journey"/> </Link>
        <Link to="/about" onClick={() => setPage('about')}> <LinkButton key ="About" title="About"/> </Link>
      </div>
    );
  }
};

export default MenuRouter;