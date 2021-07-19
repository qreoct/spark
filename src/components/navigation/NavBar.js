import React from 'react';
import Logo from '../../assets/Logo_conversations.svg';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import HelpButton from './HelpButton';

const NavBar = ({mode}) => {

  let type = mode === 'profile' ? 'profile' : 'game';
  console.log('navbar mode', mode);

  return (
    <>
      <div className={`navbar ${type}__navbar`}>
        <div className="navbar__button-container"> <BackButton /> </div>
        <Link to="/"> 
          <img src={Logo} className="site__sparklogo navbar__logo" alt="SPARK logo"/>
        </Link>
        {mode != 'profile' ? <HelpButton mode={mode}/> : null}
      </div>
    </>
  );
};

export default NavBar;