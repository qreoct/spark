import React, { useState, useEffect }  from 'react'
import { useHistory } from 'react-router-dom'

import Join from '../components/Join'
import socket from '../socket'
import MenuHeader from '../components/MenuHeader'
import BackButton from '../components/BackButton'

const JoinPage = () => {
  const [inputCode, setInputCode] = useState('')

  useEffect(() => {
    socket.connect()

    socket.on('session', ({ sessionID, userID }) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID }

      socket.userID = userID
    })

    return () => {
      socket.auth = null
      socket.off()
      socket.disconnect()
    }

  }, [socket])

  const history = useHistory()

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
    socket.auth = null
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