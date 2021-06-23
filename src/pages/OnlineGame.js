import React, { useEffect, useState } from 'react';
import '../styles/index.css';

import Join from '../components/Join'
import BackButton from '../components/BackButton';
import Chat from '../components/Chat'
import Create from '../components/Create'
import socket from '../socket';

const OnlineGame = ({page}) => {
  const [code, setCode] = useState('not working')
  const [view, setView] = useState(page)

  useEffect(() => {
    socket.connect()

    socket.on('session', ({sessionID, userID}) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID }

      socket.userID = userID
      setCode(socket.userID)
    })

    setCode(socket.userID)
  }, [socket])

  if (view === 'create') {
    return (
      <Create code={code} setView={setView} />
    )
  } else if (view === 'join') {
    return (
      <Join setView={setView}/>
    )
  } else if (view === 'chat') {
    return (
      <Chat />
    )
  }
  return (
    <div>
      <h1> Online Game </h1>
      <p> Choose between (1) Random (2) Create (3) Join. </p>

      <p> Coming soon </p>

      <BackButton />
    </div>
  );

};

export default OnlineGame;