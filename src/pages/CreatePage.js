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

    socket.emit('create', null, ({ roomCode }) => {
      if (roomCode) {
        history.push(`/online/${roomCode}`)
      }
    })

    socket.once('create', roomCode => {
      setCode(roomCode)
    })

    socket.once('joining', (roomCode) => {
      history.push(`/online/${roomCode}`)
    })
  }, [])
  
  return (
    <div className="online__create-page">
      <MenuHeader />
      <h1>Create Room</h1>
      Your room code is
      <h1>{code}</h1>
      or copy this URL <em>{`${BASE_URL}/online/${code}`}</em>
      <h5>The room will start once one other player joins</h5>
      <BackButton />
    </div>
  )
}

export default CreatePage