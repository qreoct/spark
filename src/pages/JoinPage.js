import React, { useState, useEffect }  from 'react'
import { useHistory } from 'react-router-dom'

import Join from '../components/Join'
import socket from '../socket'
import MenuHeader from '../components/MenuHeader'
import BackButton from '../components/BackButton'

const JoinPage = () => {
  const [inputCode, setInputCode] = useState('')
  const history = useHistory()

  useEffect(() => {
    socket.connect()

    socket.emit('onJoin', null, ({ roomCode }) => {
      if (roomCode) {
        history.push(`/online/${roomCode}`)
      }
    })

    return () => {
      socket.off()
      socket.disconnect()
    }

  }, [socket])

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

  const handleJoinBackAction = () => {
    socket.off()
    socket.disconnect()
    history.goBack()
  }

  return (
    <div className="online__join-page">
      <MenuHeader />
      <h1>Join Room</h1>
      <Join handleEnterClick={handleEnterClick} inputCode={inputCode} handleCodeChange={(event => setInputCode(event.target.value))} />
      <BackButton action={handleJoinBackAction} />
    </div>
  )
}

export default JoinPage