import React from 'react';
import Logo from '../../assets/Logo_conversations.svg';
import BackButton from './BackButton';

const NavBar = ({mode}) => {

  let type = mode === 'game' ? 'game' : 'profile';

  return (
    <div className={`navbar ${type}__navbar`}>
      <div className="game__navbar--back"> <BackButton /> </div>
      <img src={Logo} className="site__sparklogo game__navbar--logo" alt="SPARK logo"/>
    </div>
  );
};

export default NavBar;