import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import BackButton from './BackButton.js';
import socket from '../socket'


const Join = () => {
  const [code, setCode] = useState('')

  const handleEnterClick = (event) => {
    if (!code) {
      event.preventDefault()
    }
    socket.connect()
    socket.emit('join', code, error => {
      if (error) {
        alert(error)
      }
    })
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Room Code" className="joinInput" type="text" onChange={event => setCode(event.target.value)} /></div>
        <Link onClick={handleEnterClick} to={'/online'}>
          <button className="button" type="submit">Enter</button>
        </Link>
      </div>
      <BackButton />
    </div>
  )
}

export default Join
