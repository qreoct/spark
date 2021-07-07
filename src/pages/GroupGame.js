import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import QuestionStack from '../components/cards/QuestionStack';
import NavBar from '../components/navigation/NavBar';

import {fetchQuestionsFromCategory} from '../reducers/questionsReducer';

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
    if (loading) return <div className="flex-center"> <p> Loading game... </p> </div>;
    if (hasErrors) return <div className="flex-center"> <p> An error occured. Please try again. </p> </div>;
    
    return <QuestionStack questions={questions} mode={mode}
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