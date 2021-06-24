import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import BackButton from './BackButton.js'
import MenuHeader from './MenuHeader.js'
import socket from '../socket'

const Create = ({code, setView }) => {
  
  useEffect(() => {
    socket.on('joined', () => {
      setView('chat')
    })
  })

  const history = useHistory()

  const handleCreateBackAction = () => {
    socket.auth = null
    socket.off()
    socket.disconnect()
    history.goBack()
  }

  return (
    <div>
      <MenuHeader />
      <h1>Create Room</h1>
      <h3>Your room code is</h3>
      <h2>{code}</h2>
      <h5>The room will start once one other player joins</h5>
      <BackButton action={handleCreateBackAction} />
    </div>
  )
}

export default Create
