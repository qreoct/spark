import React from 'react'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Join = ({ handleEnterClick, inputCode, handleCodeChange }) => {

  return (
    <div className="online__container">
      <form onSubmit={handleEnterClick}>
        <input
          autoFocus
          type='text'
          placeholder='Enter your room code'
          value={inputCode}
          onChange={handleCodeChange}
          className="textarea--border"
        />
        <button type='Submit' className="input--button">
          <FontAwesomeIcon icon={faArrowCircleRight} size='3x' title='Enter' />
        </button>
      </form>
    </div>
  )
}

export default Join
