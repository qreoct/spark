import React from 'react';
import Logo from '../assets/Logo_conversations.png';
import BackButton from './BackButton';

const NavBar = () => {

  return (
    <div className="game__navbar">
      <div className="game__navbar--back"> <BackButton /> </div>
      <img src={Logo} className="site__sparklogo game__navbar--logo" alt="SPARK logo"/>
    </div>
  );
};

export default NavBar;