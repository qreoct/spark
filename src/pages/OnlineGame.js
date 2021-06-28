import React, { useState, useEffect } from 'react'
import '../styles/index.css'

import Chat from '../components/chat/Chat'
import socket from '../socket'

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

  useEffect(() => {
    socket.on('next', () => {
      setCount(count => count + 1)
    })
  }, [])

  const handleClick = () => {
    socket.emit('nextQuestion')
  }

  return (
    <div className="online__container">
      {question}
      <button onClick={handleClick} >Next</button>
      <Chat mode={mode} setQuestions={setQuestions} />
    </div>
  )
}

export default OnlineGame