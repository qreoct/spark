import React, { useState } from 'react';

import BackButton from './BackButton.js';
import MenuHeader from './MenuHeader'
import socket from '../socket'
import { conditionalExpression } from '@babel/types';


const Join = ({setView}) => {
  const [room, setRoom] = useState('')

  const handleEnterClick = (event) => {
    event.preventDefault()
    socket.emit('join', room, ({error}) => {
      if (error) {
        alert(error)
      } else {
        console.log('does it even get here?')
        setView('chat')
      }
    })
    //setView('chat')
  }

  return (
    <div>
      <MenuHeader />

      <div>
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
      </div>

      <BackButton />
    </div>
  )
}

export default Join
