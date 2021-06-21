import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import QuestionStack from '../components/QuestionStack';
import NavBar from '../components/NavBar';

import {fetchQuestionsFromCategory} from '../actions/questionsActions';
import Util from '../utils/utils';

import logo_deep from '../assets/mode_deep.svg';
import logo_icebreakers from '../assets/mode_icebreakers.svg';
import logo_thisorthat from '../assets/mode_thisorthat.svg';

import '../styles/index.css';
import { toastful, Toastful } from 'react-toastful';


const GroupGame = ({dispatch, loading, questions, hasErrors, mode}) => {

  useEffect(() => {
    dispatch(fetchQuestionsFromCategory(mode));
  }, [dispatch]);

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;
    
    return <QuestionStack questions={Util.shuffle(questions)}
      isFavoritible={true} displayToast={displayToast}/>
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

  const displayToast = (message) => {
    toastful(message, {position: 'top', duration: 1500});
  }

  return (
    <div>
      {renderQuestion()}

      {renderMode()}
      <Toastful />
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