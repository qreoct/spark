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
  }, [])

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

  return (
    <div className="online__join-page">
      <MenuHeader />
      <h1>Join Room</h1>
      <Join handleEnterClick={handleEnterClick} inputCode={inputCode} handleCodeChange={(event => setInputCode(event.target.value))} />
      <BackButton />
    </div>
  )
}

export default JoinPage