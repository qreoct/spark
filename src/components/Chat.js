import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import socket from '../socket.js'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import BackButton from './BackButton.js'
import questionService from '../services/questions'

const Chat = ({ mode, setQuestions }) => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const { roomCode } = useParams()
  const history = useHistory()

  // Ensures user leave when closing tab
  window.onbeforeunload = () => {
    socket.emit('leave')
  }
  
  // Redirect user on refresh
  window.onload = () => {
    history.push('/')
  }

  useEffect(() => {
   
    const userID = sessionStorage.getItem('userID')
    if (userID) {
      socket.auth = { userID }
    }
    
    socket.connect()
    socket.emit('join', (roomCode))
    
    if (socket.isHost) {
      questionService
        .getQuestionsFromCategory(mode, 5, 4, 1)
        .then(questions => {
          setQuestions(questions) 
          socket.emit('setQuestions', questions)
        })
    } else {
      socket.on('setQuestions', (questions) => {
        setQuestions(questions)
      })
    }

    socket.on('session', ({ userID }) => {
      // attach the user ID to the next reconnection attempts
      socket.auth = { userID }

      //sessionStorage.setItem('userID', userID);

      socket.userID = userID
    })


    socket.on('message', (message) => { //message = {content, from, to}
      setMessages(messages => messages.concat(message)) //I have no clue why its a function too
    })

    return () => {
      socket.auth = null
      socket.isHost = false
      socket.emit('leave')
      socket.off()
      history.push('/')
    }
  }, [socket])

  //function for sending message
  const sendMessage = (event) => {
    event.preventDefault()

    if (text) {
      socket.emit('private message', {content: text}, () => setText(''))
    }
  }

  const handleChatBackAction = () => {
    const result = window.confirm('You will not be able to come back, are you sure?')
    if (result) {
      socket.auth = null
      socket.isHost = false
      socket.emit('leave')
      socket.off()
      history.push('/')
    }
  }

  return (
    <div className='online__chatContainer'>
      <h1>Chat Room</h1>
      <ChatMessages messages={messages} />
      <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
      <BackButton action={handleChatBackAction} />
    </div> 
  )
}

export default Chat