import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ChatMessage from './ChatMessage'

const ChatMessages = ({ messages }) => (
  <ScrollToBottom className="online__messages">
    {messages.map((message, index) => <div key={index}><ChatMessage content={message.content}/></div>)}
  </ScrollToBottom>
);

export default ChatMessages;