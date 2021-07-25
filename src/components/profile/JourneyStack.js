import React, { useEffect } from 'react';
import {
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';

import { checkSoloReady, fetchJourneyFromLocalStorage } from '../../reducers/soloReducer';
import Util from '../../utils/utils';

const JourneyStack = ({dispatch, soloReady, journey}) => {

  useEffect(() => {
    dispatch(fetchJourneyFromLocalStorage());
    dispatch(checkSoloReady());
  }, [dispatch]);

  const renderJourneyStack = () => {
    return (
      <div className="journeystack">
        <h1> Journey </h1>
        {soloReady ? <p> Your daily <Link className="text__link" to="/solo">Solo Questions</Link> are ready! </p> : null}
        <div className="profile__container">
          {!journey || journey.length == 0
            ? <p> Nothing in Journey yet! Play <Link className="text__link" to="/solo">Solo Mode</Link> to record your reflections. </p>
            : journey.map((j, idx) => 
              <Link to= {`/profile/${idx}`} key={idx} className="journey__preview">
                <span className="journey__preview-date">
                  <span className="day">{new Date(j.timestamp).getDate()}</span>
                  {Util.timestampToMM(j.timestamp)}
                </span>
                <span className="journey__preview-reflection"> 
                  <strong> {j.question} </strong> <br/>
                  <span> {j.reflection} </span>
                </span>
                {j.picture ? 
                  <div>
                    <img src={j.picture.pic.urls.small} className="journey__preview-pic" />
                  </div>
                  : null }
              </Link>
            )
          }
        </div>
      </div>
    )
  };

  return (
    <>
      {renderJourneyStack()}
    </>
  );

};

const mapStateToProps = (state) => ({
  soloReady: state.solo.soloReady,
  loading: state.solo.loading,
  hasError: state.solo.hasError,
  journey: state.solo.journey
});

export default connect(mapStateToProps)(JourneyStack);