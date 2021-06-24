import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import MenuHeader from './MenuHeader'
import socket from '../socket'
import BackButton from './BackButton'


const Join = ({setView}) => {
  const [room, setRoom] = useState('')

  const handleEnterClick = (event) => {
    event.preventDefault()
    socket.emit('join', room, ({error}) => {
      if (error) {
        alert(error)
      } else {
        setView('chat')
      }
    })
  }

  const history = useHistory()

  const handleJoinBackAction = () => {
    socket.auth = null
    socket.off()
    socket.disconnect()
    history.goBack()
  }

  return (
    <div>
      <MenuHeader />
      <h1>Join Room</h1>
      <form onSubmit={handleEnterClick}>
        <input
          autoFocus
          type='text'
          placeholder='Enter your room code'
          value={room}
          onChange={event => setRoom(event.target.value)}
        />
        <button type='Submit'>Enter</button>
      </form>
      <BackButton action={handleJoinBackAction} />
    </div>
  )
}

export default Join
