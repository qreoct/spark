import React, { useState, useEffect } from 'react'
import '../styles/index.css'

import Chat from '../components/Chat'
import QuestionStack from '../components/QuestionStack';
import questionService from '../services/questions'

const OnlineGame = ({ mode }) => {
  const [question, setQuestion] = useState('')
  const [questions, setQuestions] = useState([])
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (questions.length === 0) {
      setQuestion('loading')
    } else if (count >= questions.length) {
      setQuestion('no more question')
    } else {
      setQuestion(questions[count].question)
    }
  }, [questions, count])

  return (
    <div className="online__container">
      {question}
      <button onClick={() => setCount(count + 1)} >Next</button>
      <Chat mode={mode} setQuestions={setQuestions} />
    </div>
  )
}

export default OnlineGame