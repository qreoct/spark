import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import Question from '../components/Question';

import {fetchQuestion} from '../actions/questionsActions';

import '../styles/index.css';

import BackButton from '../components/BackButton';

const SoloGame = ({dispatch, loading, questions, hasErrors}) => {

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;
    
    return <Question key={questions.id} data={questions} />
  };

  return (
    <div>
      <h1> Solo game </h1>
      {renderQuestion()}
      <BackButton />
    </div>
  );

};

const mapStateToProps = (state) => ({
  loading: state.questions.loading,
  questions: state.questions.questions,
  hasErrors: state.questions.hasErrors,
});

export default connect(mapStateToProps)(SoloGame);