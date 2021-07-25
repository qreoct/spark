import React from 'react';
import BackButton from './BackButton';

const HelpModal = ({mode, setInvisible}) => {


  const handleClose = (e) => {
    e.preventDefault();
    setInvisible();
  }

  let content;
  let title;

  switch(mode) {
  case 'favourites':
    title = 'Favourites';
    content = 'Your Favourited cards are all here! Swipe the cards to reveal more Questions!';
    break;
  case 'solo':
    title = 'Solo'
    content = 'Solo mode is perfect for reflection and self-discovery! \n\n' +
    'Every day, you\'ll receive 3 thought provoking questions. Write down answers that will be saved in your personal Journey, and look back on them in the future!';
    break;
  case 'icebreakers':
    title = 'Icebreakers'
    content = 'Welcome to Icebreakers mode! Swipe the cards to reveal more Questions! \n\n' +
    'Spark any conversation with our wide variety of Icebreakers! You\'re sure to get to know somebody with these questions.'
    break;
  case 'deep':
    title = 'Deep Dive'
    content = 'Welcome to Deep Dive mode! Swipe the cards to reveal more Questions! \n\n' +
    'Deep Dive contains questions that challenge assumptions and go deep into what’s normally left unsaid. Find out what you and your friends are truly like, and bond together in the process!'
    break;
  case 'story':
    title = 'Story'
    content = 'Welcome to Story mode! Swipe the cards to reveal more Questions! \n\n' +
    'Story mode is about getting to know someone on a different level. Answer 10 questions in total, which get progressively more personal, and learn about one another in the process. \n\n' +
    'Take turns asking and answering each question as you progress through this mode!'
    break;
  case 'this-or-that':
    title = 'This or That'
    content = 'Welcome to This or That mode! Swipe the cards to reveal more Questions! \n\n' +
      'This or That is a lighthearted game, where you find out about each others\' preferences. Which will you pick?'
    break;
  }

  return (
    <>
      <div className="modal" onClick={handleClose}>
      </div>
      <div className="modal__content">
        <h1>{title}</h1>
        <span>{content}</span>
        <div className="modal__close">
          <BackButton action={handleClose} text='close'/>
        </div>
      </div>
    </>
    
  )

}

export default HelpModal;