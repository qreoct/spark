import React from 'react'
import ReactEmoji from 'react-emoji'

const ChatMessage = ({content}) => {

  return (
    <div>
      {ReactEmoji.emojify(content)}
    </div>
  )
}

export default ChatMessage