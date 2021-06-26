import React, { useEffect } from 'react'
import '../styles/index.css'

import Chat from '../components/Chat'
import QuestionStack from '../components/QuestionStack';

import { fetchQuestionsFromCategory } from '../actions/questionsActions'
import { shuffle } from '../utils/shuffle';
import { connect } from 'react-redux';

const OnlineGame = ({dispatch, loading, questions, hasErrors, mode}) => {

  useEffect(() => {
    dispatch(fetchQuestionsFromCategory('online-room'))
  }, [dispatch])

  const renderQuestion = () => {
    if (loading) return <p> Loading... </p>
    if (hasErrors) return <p> Error :( </p>

    return <QuestionStack questions={shuffle(questions)} isFavoritible={false} />
  }

  return (
    <div className="online__container">
      {renderQuestion()}
      <Chat />
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.questions.loading,
  questions: state.questions.questions,
  hasErrors: state.questions.hasErrors,
});

export default connect(mapStateToProps)(OnlineGame)