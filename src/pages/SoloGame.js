import React, { useEffect, useState } from 'react';
import {
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';

import NavBar from '../components/navigation/NavBar';
import LinkButton from '../components/navigation/LinkButton';
import SoloStack from '../components/cards/SoloStack';
import Confetti from '../components/utils/Confetti';
import { Toastful, toastful } from 'react-toastful';
import { checkSoloReady } from '../reducers/soloReducer';
import { setCurrentMode } from '../reducers/modeReducer';


const SoloGame = ({dispatch, soloReady, loading, hasError }) => {

  const [stage, setStage] = useState('menu')

  useEffect(() => {
    dispatch(checkSoloReady());
  },[dispatch])

  const startGame = () => {
    setStage('game');
    setMode('solo')
  }

  const setMode = (mode) => {
    dispatch(setCurrentMode(mode));
  }

  const displayToast = (message) => {
    toastful(message, {position: 'top', duration: 1500});
  }

  const renderStart = () => {
    if (hasError) {
      <p> Sorry, something went wrong :( </p>
    }
    if (loading) {
      <p> loading... </p>
    }
    if (soloReady) {
      return (
        <>
          <LinkButton title="Start" action={startGame}/>
        </>
      )
    } else {
      return <Confetti text ={'You have completed all 3 questions today! Come back tomorrow.'} />
    }
  }

  const renderSolo = () => {
    if (stage === 'menu') {
      return (
        <div className="solo__welcome" style={{marginBottom:'20vh'}}>
          <p className="picture-card__question"> Welcome to Solo mode! </p>
          <p> Every day, you&apos;ll receive 3 thought provoking questions. 
          Write down answers that will be saved to your personal <Link className="text__link" to="/profile" onClick={setMode('profile')}> Journey </Link> </p>
          <p> <strong>NOTE:</strong> We do not store any of your data on servers.
        It is all stored in your local browser storage. </p>
          {renderStart()}
        </div>
      )
    } else if (stage === 'game' || stage==='game-end') {
      return (
        <SoloStack displayToast={displayToast} setStage={setStage} />
      )
    }
  };

  return (
    <div className="solo">
      {renderSolo()}
      <Toastful />
      <NavBar />
    </div>
  );

};

const mapStateToProps = (state) => ({
  soloReady: state.solo.soloReady,
  loading: state.solo.loading,
  hasError: state.solo.hasError
});

export default connect(mapStateToProps)(SoloGame);