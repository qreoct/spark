import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import BackButton from './BackButton.js';
import LinkButton from './LinkButton.js';

const MenuRouter = ({setPage, setMode}) => {

  const [menu, setMenu] = useState('home');

  switch (menu) {
  case 'select-room':
    return (
      <div>
        <div className="menu__router--container">
          <Link to="/create" onClick={() => {setPage('create')}}><LinkButton key='Create' title="Create" subtitle="Click here to get your own unique room code" /></Link>
          <Link to='/join' onClick={() => {setPage('join')}}><LinkButton key='Join' title='Join' subtitle='Click here to join an existing room' /></Link>
          <Link to='/online' onClick={() => {setPage('online')}}><LinkButton key='Random' title='Random' subtitle='Click here to join a random room' /></Link>
          <Link to='/chat' onClick={() => {setPage('chat')}}><LinkButton key='Chat' title='Chat' subtitle='This is for testing the chat app' /></Link>
        </div>
        <div className="menu__navigation--container">
          <BackButton action={() => setMenu('player')}/>
        </div>
      </div>
    )
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
          <Link to="/solo" onClick={() => {setPage('solo'); setMode('solo')}}> <LinkButton key="Solo" title="Solo" subtitle="Self journey"/> </Link>
          <Link to="/" onClick={() => setMenu('mode')}> <LinkButton key="Group" title="Group" subtitle="Group fun!"/> </Link>
          <Link to="/" onClick={() => setMenu('select-room')}> <LinkButton key="Online" title="Online" subtitle="Play with friends or strangers!"/> </Link>
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
        <Link to="/profile" onClick={() => {setPage('profile'); setMode('profile')}}> <LinkButton key="Profile" title="Profile" subtitle="Your profile"/> </Link>
        <Link to="/about" onClick={() => setPage('about')}> <LinkButton key ="About" title="About"/> </Link>
      </div>
    );
  }
};

export default MenuRouter;