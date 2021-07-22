import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import SoloInput from './SoloInput';
import Confetti from '../utils/Confetti';

import { fetchSoloQuestions, writeNewSoloQuestions } from '../../reducers/soloReducer';
import Util from '../../utils/utils';
import { setCurrentMode } from '../../reducers/modeReducer';

const SoloStack = ({dispatch, loading, questions, hasErrors, displayToast, setStage }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchSoloQuestions());
    setMode('solo');
    setIndex(Number(localStorage.getItem('solo_index')));
  }, [dispatch]);

  const setMode = (mode) => {
    dispatch(setCurrentMode(mode))
  }

  const submitHandler = (content) => {
    // write to reflections
    Util.writeSoloReflection({
      question: questions[index].question,
      reflection: content.reflection,
      picture: content.picture || null
    });

    // increment index unless max
    setIndex(index+1);
    localStorage.setItem('solo_index', (index+1).toString());

    // write new timestamp, reset index, fetch tomorrow's questions
    if((index+1)==questions.length){
      Util.setSoloTimestamp();
      localStorage.setItem('solo_index', (0).toString());
      dispatch(writeNewSoloQuestions());
    }
  }

  const renderEnd = () => {
    setStage('game-end');
    setMode('profile');
    return <Confetti text={'That\'s all the questions for today! Your responses are saved in your Journey.'} />
  }

  const renderStack = () => {
    if (loading) {
      return <p> loading </p> 
    } else if (hasErrors) {
      return <p> error :( </p>
    } else if (questions) {
      if (index==questions.length) { return renderEnd() }
      else{
        return (
          <SoloInput key={index} data={questions[index]}
            displayToast={displayToast}
            submitHandler={submitHandler}/>
        )
      }
      
    } else {
      return <p> fatal error </p>
    }
  }

  return (
    renderStack()
  );
};

const mapStateToProps = (state) => ({
  loading: state.solo.loading,
  questions: state.solo.questions,
  hasErrors: state.solo.hasErrors,
});

export default connect(mapStateToProps)(SoloStack);