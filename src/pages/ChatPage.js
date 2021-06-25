import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import socket from '../socket.js'
import BackButton from '../components/BackButton'
import ChatMessages from '../components/ChatMessages'
import ChatInput from '../components/ChatInput'

const ChatPage = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const history = useHistory()

  useEffect(() => {
    //Ensures that user leave when closing tab
    window.onbeforeunload = () => {
      socket.auth = null
      socket.emit('leave')
      socket.off()
      socket.disconnect()
    }
    
    socket.connect()

    socket.on('session', ({sessionID, userID}) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID }
      socket.userID = userID
    })
    
    socket.emit('join', 'room')

    socket.on('message', (message) => { //message = {content, from, to}
      setMessages(messages => messages.concat(message)) //I have no clue why its a function too
    })

    return () => {
      socket.auth = null
      //socket.emit('leave')
      socket.off()
      socket.disconnect()
      history.push('/')
    }
  }, [socket])

  const handleBackAction = () => {
    socket.auth = null
    socket.emit('leave')
    socket.off()
    socket.disconnect()
    history.push('/')
  }

  //function for sending message
  const sendMessage = (event) => {
    event.preventDefault()

    if (text) {
      socket.emit('private message', {content: text}, () => setText(''))
    }
  }

  return (
    <div className='online__container'>
      <div className='online__chatContainer'>
        <h1>This is to test the chat function</h1>
        <div>Everyone that enters this chat gets push into the same room</div>
        <ChatMessages messages={messages} />
        <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
        <BackButton action={handleBackAction}/>
      </div>
    </div>
    
  )
}

export default ChatPage