import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import socket from '../socket.js'
import BackButton from '../components/BackButton'
import ChatMessages from '../components/ChatMessages'
import ChatInput from '../components/ChatInput'

const ChatPage = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.connect()

    socket.on('session', ({sessionID, userID}) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID }
      socket.userID = userID
    })

    setTimeout(() => socket.emit('join', socket.userID, () => {}), 1000)
  }, [socket])

  useEffect(() => {
    socket.on('message', (message) => { //message = {content, from, to}
      setMessages([...messages, message])
    })
  }, [messages])

  const history = useHistory()

  const handleBackAction = () => {
    socket.disconnect()
    history.goBack()
  }

  //function for sending message
  const sendMessage = (event) => {
    event.preventDefault()

    if (text) {
      socket.emit('private message', {content: text}, () => setText(''))
    }
  }

  return (
    <div className='online__chatContainer'>
      <h1>This is to test the chat function</h1>
      <ChatMessages messages={messages} />
      <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
      <BackButton action={handleBackAction}/>
    </div>
    
  )
}

export default ChatPage