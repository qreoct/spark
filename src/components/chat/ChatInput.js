import React from 'react'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatInput = ({ text, setText, sendMessage, prompt='Type a message' }) => {
  return (
    <form className='input--form' onSubmit={sendMessage}>
      <input 
        autoFocus
        className='textarea'
        type='text'
        placeholder={prompt}
        value={text}
        onChange={event => setText(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button type='Submit' className="input--button selectable">
        <FontAwesomeIcon icon={faArrowCircleRight} size='3x' title='Enter' />
      </button>
    </form>
  )
}

export default ChatInput
