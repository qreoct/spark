import React, { useEffect } from 'react';
import BackButton from '../components/navigation/BackButton.js';
import JourneyEntry from '../components/profile/JourneyEntry.js';

import {connect} from 'react-redux';

import { useParams } from 'react-router';

import '../styles/index.css';
import { fetchJourneyFromLocalStorage } from '../reducers/soloReducer.js';

const JourneyPage = ({dispatch, journey}) => {

  let {id} = useParams();

  useEffect(() => {
    dispatch(fetchJourneyFromLocalStorage());
  }, [dispatch])

  return (
    <div>
      <JourneyEntry data={journey[id]}/>

      <div className="menu__navigation--container">
        <BackButton />
      </div>
    </div>
  );

};

const mapStateToProps = (state) => ({
  journey: state.solo.journey
});

export default connect(mapStateToProps)(JourneyPage);