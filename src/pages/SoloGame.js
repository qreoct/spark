import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import Question from '../components/Question';
import BackButton from '../components/BackButton';
import LinkButton from '../components/LinkButton';
import Slider from 'react-touch-drag-slider';

import {fetchQuestion} from '../actions/questionsActions';

import '../styles/index.css';


const SoloGame = ({dispatch, loading, questions, hasErrors}) => {

  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;
    
    return <Slider 
      onSlideStart={(i) => { console.log('started dragging on slide', i)
      }}
      activeIndex={0}
      threshHold={100}
      transition={0.5}
      scaleOnDrag={true}
    >
      {questions.map((q, index) => (
        <Question key={index} data={q} />
      ))}
      
    </Slider>
  };

  return (
    <div>
      <h1> Solo game </h1>
      <div className="game__question-card--container">
        {renderQuestion()}
      </div>

      <div onClick={() => dispatch(fetchQuestion())} className="game__shuffle--btn">
        <LinkButton title="shuffle" />
      </div>

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