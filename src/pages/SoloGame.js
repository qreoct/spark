import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import QuestionStack from '../components/QuestionStack';
import NavBar from '../components/NavBar';

import {fetchQuestionsFromCategory} from '../actions/questionsActions';

import '../styles/index.css';


const SoloGame = ({dispatch, loading, questions, hasErrors}) => {

  useEffect(() => {
    dispatch(fetchQuestionsFromCategory('solo'));
  }, [dispatch]);

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;
    
    return <QuestionStack questions={questions} isFavoritible={false} />
  };

  return (
    <div>
      {renderQuestion()}
      <NavBar />
    </div>
  );

};

const mapStateToProps = (state) => ({
  loading: state.questions.loading,
  questions: state.questions.questions,
  hasErrors: state.questions.hasErrors,
});

export default connect(mapStateToProps)(SoloGame);