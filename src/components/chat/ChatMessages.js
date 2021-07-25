import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ChatMessage from './ChatMessage'

const ChatMessages = ({ user, messages }) => (
  <ScrollToBottom className="online__messages">
    {messages.map((message, index) => 
      <ChatMessage content={message.content}
        key={index}
        user={user}
        from={message.from}
      />)
    }
  </ScrollToBottom>
);

export default ChatMessages;