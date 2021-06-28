import React, { useState, useEffect }  from 'react'
import { useHistory } from 'react-router-dom'

import socket from '../socket'
import MenuHeader from '../components/navigation/MenuHeader'
import BackButton from '../components/navigation/BackButton'
import ChatInput from '../components/chat/ChatInput'

const JoinPage = () => {
  const [inputCode, setInputCode] = useState('')
  const history = useHistory()
  
  useEffect(() => {
    socket.connect()
  }, [])

  const handleEnterClick = (event) => {
    event.preventDefault()
    socket.emit('joining', inputCode, ({ error }) => {
      if (error) {
        alert(error)
      } else {
        history.push(`/online/${inputCode}`)
      }
    })
  }

  return (
    <div className="online__container">
      <MenuHeader />
      <h1>Join Room</h1>
      <ChatInput
        text={inputCode}
        setText={setInputCode}
        sendMessage={handleEnterClick}
        prompt='Enter room code'/>
      <BackButton />
    </div>
  )
}

export default JoinPage