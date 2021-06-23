import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import socket from '../socket.js'
import BackButton from './BackButton'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

const Chat = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('message', (message) => { //message = {content, from, to}
      setMessages(messages => messages.concat(message)) //I have no clue why its a function too
    })
  }, [])

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
      <h1>Chat Room</h1>
      <ChatMessages messages={messages} />
      <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
      <BackButton action={handleBackAction}/>
    </div>
    
  )
}

export default Chat