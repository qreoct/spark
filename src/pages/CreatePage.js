import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import socket from '../socket'
import { toastful, Toastful } from 'react-toastful'
import BackButton from '../components/navigation/BackButton'
import MenuHeader from '../components/navigation/MenuHeader'

const BASE_URL = 'https://sprkprod-ruiquan.herokuapp.com' && 'localhost:3000'

const CreatePage = () => {
  const [code, setCode] = useState('loading...')
  const history = useHistory()

  useEffect(() => {
    socket.connect()

    socket.emit('create')

    socket.once('create', roomCode => {
      setCode(roomCode)
    })

    socket.once('joining', (roomCode) => {
      socket.isHost = true
      history.push(`/online/${roomCode}`)
    })
  }, [])

  const copyCode = () => {
    navigator.clipboard.writeText(`${BASE_URL}/online/${code}`).then(() => {
      toastful('Copied URL!',
        {duration: 1500, position: 'top'})
    })
  }

  return (
    <div className="online__container">
      <MenuHeader />
      <h1>Create Room</h1>
      Your room code is
      <h1>{code}</h1>
      Copy this URL to share with your friends:
      <span className="selectable selectable-text" onClick={copyCode}> <em>{`${BASE_URL}/online/${code}`}</em> </span>
      <h5>The room will start once one other player joins</h5>
      <BackButton />
      <Toastful />
    </div>
  )
}

export default CreatePage