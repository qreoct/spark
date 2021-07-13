import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import socket from '../socket'
import BackButton from '../components/navigation/BackButton'
import MenuHeader from '../components/navigation/MenuHeader'

const WaitingPage = () => {
  const history = useHistory()

  window.onbeforeunload = () => {
    socket.emit('leaveWaiting')
  }

  useEffect(() => {
    socket.connect()

    socket.emit('waiting', null, (roomCode) => {
      if (roomCode) {
        socket.isHost = true
        history.push(`/online/${roomCode}`)
      }
    })

    socket.once('joining', (roomCode) => {
      history.push(`/online/${roomCode}`)
    })

    return () => {
      socket.emit('leaveWaiting')
    }
  }, [])

  const handleBackAction = () => {
    socket.emit('leaveWaiting')
    history.goBack()
  }
  
  return (
    <div className="online__container">
      <MenuHeader />
      <h1 className="loading">Waiting for players</h1>
      <br/>
      The room will start once one other player joins.
      <br/>
      <BackButton action={handleBackAction} />
    </div>
  )
}

export default WaitingPage