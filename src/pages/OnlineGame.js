import React, { useState, useEffect } from 'react'
import '../styles/index.css'

import Chat from '../components/chat/Chat'
import socket from '../socket'
import PictureCard from '../components/cards/PictureCard'

const OnlineGame = ({ mode }) => {
  const [question, setQuestion] = useState('')
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    if (questions.length === 0) {
      setQuestion('loading...')
    } else if (index >= questions.length) {
      setQuestion('You\'ve reached the end of the questions!')
    } else {
      setQuestion(questions[index].question)
    }
  }, [questions, index])

  useEffect(() => {
    socket.on('next', () => {
      setIndex(index => index + 1)
    })
  }, [])

  const handleClick = () => {
    socket.emit('nextQuestion')
  }

  const renderQuestion = () => {
    return (
      <div className="online__question" key={question}>
        {index == questions.length 
          ?
          <>
            <span className="card__picture--question"> {question} </span>
          </>
          :
          <>       
            {questions.length > 0 && questions[index].canPicture 
              ? <PictureCard topic={questions[index].topic} data={questions[index]} isActive={true} mode={'online'}/>
              : <span className="card__picture--question"> {question} </span>}
            <button className="selectable input--button center" onClick={handleClick}> Next </button>
          </>
        }
      </div>
    )
  }

  return (
    <div className="online__container">
      {renderQuestion()}
      <Chat mode={mode} setQuestions={setQuestions} />
    </div>
  )
}

export default OnlineGame