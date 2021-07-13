import React from 'react';
import Logo from '../../assets/Logo_conversations.svg';
import BackButton from './BackButton';
import HelpButton from './HelpButton';

const NavBar = ({mode}) => {

  let type = mode === 'profile' ? 'profile' : 'game';
  console.log('navbar mode', mode);

  return (
    <>
      <div className={`navbar ${type}__navbar`}>
        <div className="game__navbar--back"> <BackButton /> </div>
        <img src={Logo} className="site__sparklogo game__navbar--logo" alt="SPARK logo"/>
        {mode != 'profile' ? <HelpButton mode={mode}/> : null}
      </div>
    </>
  );
};

export default NavBar;