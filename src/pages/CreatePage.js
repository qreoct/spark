import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import socket from '../socket'
import BackButton from '../components/BackButton'
import MenuHeader from '../components/MenuHeader'

const BASE_URL =  'localhost:3000' || 'https://dashboard.heroku.com/apps/sprkprod-ruiquan'

const CreatePage = () => {
  const [code, setCode] = useState('loading...')
  const history = useHistory()

  useEffect(() => {
    socket.connect()

    socket.on('session', ({ sessionID, userID }) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID }

      socket.userID = userID
      setCode(socket.userID)
    })

    socket.on('joining', () => {
      history.push(`/online/${socket.userID}`)
    })

    return () => {
      socket.auth = null
      socket.off()
      socket.disconnect()
    }
  }, [socket])


  const handleCreateBackAction = () => {
    socket.auth = null
    socket.off()
    socket.disconnect()
    history.goBack()
  }
  
  return (
    <div className="online__create-page">
      <MenuHeader />
      <h1>Create Room</h1>
      Your room code is
      <h1>{code}</h1>
      or copy this URL <em>{`${BASE_URL}/online/${code}`}</em>
      <h5>The room will start once one other player joins</h5>
      <BackButton action={handleCreateBackAction} />
    </div>
  )
}

export default CreatePage