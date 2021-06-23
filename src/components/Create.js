import React, { useState, useEffect } from 'react';

import BackButton from './BackButton.js';
import MenuHeader from './MenuHeader.js';
import socket from '../socket'

const Create = ({code, setView}) => {
  
  useEffect(() => {
    socket.on('joined', () => {
      setView('chat')
    })
  })

  return (
    <div>
      <MenuHeader />
      <h1>Create Room</h1>
      <div>Your room code is</div>
      {code}
      <div>The room will start once one other player joins</div>
      <BackButton />
    </div>

  )
}

export default Create
