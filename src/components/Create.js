import React, { useState, useEffect } from 'react';
import OnlineGame from '../pages/OnlineGame.js';
import socket from '../socket.js';
import BackButton from './BackButton.js';

const Create = () => {
  const [hasPartner, setPartner] = useState(false)
  const [roomCode, setRoomCode]= useState(null)

  useEffect(() => {
    socket.connect()

    socket.on('session', ({ sessionID, userID }) => {
      setRoomCode(userID)
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      //localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      socket.userID = userID;
    })
  })
 
  /*
  useEffect(() => {
    socket.connect()
    socket.on('connect', () => {
      console.log(`Socket with id ${socket.id} has connected`)
    })

    socket.on("session", ({ sessionID, userID }) => {
      setRoomCode(userID)
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      //localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      socket.userID = userID;
    });

    socket.on('link', () => {
      console.log('client side got linked')
      setPartner(true)
    })

    socket.on('disconnect', () => {
      console.log(`Socket with id ${socket.id} has disconnected`)
    })

    return () => {
      socket.off('connect')
      socket.off('link')
      socket.off('disconnect')
    }
  })
  */

  if (hasPartner) {
    return (
      <div>
        <OnlineGame />
      </div>
    )
  } else {
    return (
      <div className="createRoomOuterContainer">
        <h1>Create Room</h1>
        <p>Your room code is {roomCode}</p>
        <p>The room will start once one other player joins</p>
        <div className="menu__navigation--container">
          <BackButton />
        </div>
      </div>
    )
  }
}

export default Create
