import React, { useEffect, useState } from 'react';
import {
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';

import '../styles/index.css';
import NavBar from '../components/navigation/NavBar';
import LinkButton from '../components/navigation/LinkButton';
import SoloStack from '../components/cards/SoloStack';
import { Toastful, toastful } from 'react-toastful';
import { checkSoloReady } from '../reducers/soloReducer';


const SoloGame = ({dispatch, soloReady, loading, hasError, setMode}) => {

  const [stage, setStage] = useState('menu')

  useEffect(() => {
    dispatch(checkSoloReady());
  },[dispatch])

  const startGame = () => {
    setStage('game');
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
          <p> Hit start to begin! </p>
          <LinkButton title="Start" action={startGame}/>
        </>
      )
    } else {
      return (<p> You have completed all 3 questions today! Come back tomorrow. </p>)
    }
  }

  const renderSolo = () => {
    if (stage === 'menu') {
      return (
        <div className="solo__welcome">
          <p className="card__picture--question"> Welcome to Solo mode! </p>
          <p> Every day, you&apos;ll receive 3 thought provoking questions. 
          Write down answers that will be saved to your personal <Link className="text__link" to="/profile" onClick={setMode('profile')}> Journey </Link> </p>
          <p> <strong>NOTE:</strong> We do not store any of your data on servers.
        It is all stored in your local browser storage. </p>
          {renderStart()}
        </div>
      )
    } else if (stage === 'game') {
      return (
        <SoloStack displayToast={displayToast}/>
      )
    }
  };

  return (
    <div className="solo">
      {renderSolo()}

      <Toastful />
      <NavBar mode={stage==='menu' ? 'profile' : 'solo'}/>
    </div>
  );

};

const mapStateToProps = (state) => ({
  soloReady: state.solo.soloReady,
  loading: state.solo.loading,
  hasError: state.solo.hasError
});

export default connect(mapStateToProps)(SoloGame);