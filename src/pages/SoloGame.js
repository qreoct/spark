import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import Question from '../components/Question';
import BackButton from '../components/BackButton';
import TinderCard from 'react-tinder-card';

import {fetchQuestionsFromCategory} from '../actions/questionsActions';

import '../styles/index.css';


const SoloGame = ({dispatch, loading, questions, hasErrors}) => {

  useEffect(() => {
    dispatch(fetchQuestionsFromCategory('solo'));
  }, [dispatch]);

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;
    
    return <div className="game__question-card--container">
      {questions.map(q => 
        <TinderCard className="swipe" key={q.id} flickOnSwipe='false' preventSwipe={['down','up']}>
          <Question key={q.id} data={q} isFavoritible={false}/>
        </TinderCard>
      )}
    </div>
    
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