import React from 'react'

const Join = ({ handleEnterClick, inputCode, handleCodeChange }) => {

  return (
    <div>
      <form onSubmit={handleEnterClick}>
        <input
          autoFocus
          type='text'
          placeholder='Enter your room code'
          value={inputCode}
          onChange={handleCodeChange}
        />
        <button type='Submit'>Enter</button>
      </form>
    </div>
  )
}

export default Join
