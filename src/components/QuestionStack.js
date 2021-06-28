import React, {useState, useEffect} from 'react';
import QuestionCard from './QuestionCard';
import PictureCard from './PictureCard';
import {Card, CardWrapper} from 'react-swipeable-cards';

const QuestionStack = ({questions, mode, isFavoritible, displayToast}) => {

  const [qnList, setQnList] = useState([]);
  const [index, setIndex] = useState(0);
  let colors = ['yellow', 'magenta', 'cyan'];

  useEffect(() => {
    setQnList(questions.slice(0,5));
    handleSwipe()
  }, []);

  const handleSwipe = () => {
    let offset = 5;
    setIndex(index + 1);
    let end = index+offset >= questions.length ? questions.length : index+offset
    setQnList(questions.slice(index, end));
  }

  const clearStyle = {
    background: 'transparent',
    border: 'none',
    overflow: 'visible',
    height: 'auto',
    maxWidth: '800px'
  }

  return (
    <CardWrapper className="game__question-card--container">
      {qnList.map((q, idx) => 
        <Card key={q.id} onSwipe={handleSwipe} style={clearStyle}>
          {q.canPicture 
            ? <PictureCard topic={q.topic} data={q} isActive={idx===0} mode={mode}/>
            : <QuestionCard data={q} isFavoritible={isFavoritible} displayToast={displayToast}
              color={colors[Math.floor(Math.random() * colors.length)]} mode={mode}/>
          }
        </Card>
      )}
    </CardWrapper>
  );
};

export default QuestionStack;