import React from 'react'
import ReactEmoji from 'react-emoji'

const ChatMessage = ({user, content, from}) => {

  const renderMessage = () => {
    if (from === user) {
      return (
        <div className="msg msg--send">
          <div className="msg__bubble msg__bubble--send">
            <p className="msg__text">{ReactEmoji.emojify(content)}</p>
          </div>
        </div>
      )
    } else if (from === 'sparkbot') {
      return (
        <div className="msg">
          <div>
            <p className="msg__text msg--announce">{ReactEmoji.emojify(content)}</p>
          </div>
        </div>
      )
    } else if (from != user && from != 'sparkbot') {
      return (
        <div className="msg msg--receive">
          <div className="msg__bubble msg__bubble--receive">
            <p className="msg__text">{ReactEmoji.emojify(content)}</p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    renderMessage()
  )
}

export default ChatMessage