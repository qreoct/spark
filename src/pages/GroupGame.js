import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import Question from '../components/Question';
import TinderCard from 'react-tinder-card';
import NavBar from '../components/NavBar';

import {fetchQuestionsFromCategory} from '../actions/questionsActions';
import {shuffle} from '../utils/shuffle';

import logo_deep from '../assets/mode_deep.svg';
import logo_icebreakers from '../assets/mode_icebreakers.svg';
import logo_thisorthat from '../assets/mode_thisorthat.svg';

import '../styles/index.css';


const GroupGame = ({dispatch, loading, questions, hasErrors, mode}) => {

  useEffect(() => {
    dispatch(fetchQuestionsFromCategory(mode));
  }, [dispatch]);

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;
    
    return <div className="game__question-card--container">
      {shuffle(questions).map(q => 
        <TinderCard className="swipe" key={q.id} flickOnSwipe='false' preventSwipe={['down','up']}>
          <Question key={q.id} data={q} />
        </TinderCard>
      )}
    </div>
  };

  const renderMode = () => {
    switch(mode) {
    case('deep'):
      return <img src={logo_deep} className="modeicon"/>
    case('icebreakers'):
      return <img src={logo_icebreakers} className="modeicon" />
    case('this-or-that'):
      return <img src={logo_thisorthat} className="modeicon" />
    default:
      return null;
    }
  }

  return (
    <div>
      {renderQuestion()}

      {renderMode()}

      <NavBar />
    </div>
  );

};

const mapStateToProps = (state) => ({
  loading: state.questions.loading,
  questions: state.questions.questions,
  hasErrors: state.questions.hasErrors,
});

export default connect(mapStateToProps)(GroupGame);