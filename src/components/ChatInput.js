import React from 'react'

const ChatInput = ({ text, setText, sendMessage }) => {
  return (
    <form className='online__chatForm'>
      <input 
        autoFocus
        className='online__input'
        type='text'
        placeholder='Type a message'
        value={text}
        onChange={event => setText(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className='online__button' onClick={event => sendMessage(event)}>Send</button>
    </form>
  )
}

export default ChatInput