import React from 'react'
import ReactEmoji from 'react-emoji'

const ChatMessage = ({user, content, from, to}) => {

  return (
    <span className={`chat__message
    ${from === user ? 'chat__message--send' : ''}
    ${from === 'sparkbot' ? 'chat__message--announce' : ''}
    ${from != user && from != 'sparkbot' ? 'chat__message--receive' : ''}`}>
      {ReactEmoji.emojify(content)}
    </span>
  )
}

export default ChatMessage