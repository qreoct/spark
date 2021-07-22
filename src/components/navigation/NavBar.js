import React, { useEffect } from 'react';
import Logo from '../../assets/Logo_conversations.svg';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import HelpButton from './HelpButton';

import {connect} from 'react-redux';
import { fetchCurrentMode } from '../../reducers/modeReducer';

const NavBar = ({dispatch, mode}) => {

  useEffect(() => {
    dispatch(fetchCurrentMode());
    console.log('navbar mode', mode);
  }, [dispatch])

  let type = mode === 'profile' ? 'profile' : 'game';

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

const mapStateToProps = (state) => ({
  mode: state.mode.mode
});

export default connect(mapStateToProps)(NavBar);