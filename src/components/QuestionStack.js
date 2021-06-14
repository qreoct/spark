import React, {useState, useEffect} from 'react';
import Question from '../components/Question';
import {Card, CardWrapper} from 'react-swipeable-cards';

const QuestionStack = ({questions, isFavoritible}) => {

  const [qnList, setQnList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setQnList(questions.slice(0,5));
    handleSwipe()
  }, []);

  const handleSwipe = () => {
    let offset = 5;
    setIndex(index + 1);
    setQnList(questions.slice(index, index+offset));
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
      {qnList.map(q => 
        <Card key={q.id} onSwipe={handleSwipe} style={clearStyle}>
          <Question data={q} isFavoritible={isFavoritible}/>
        </Card>
      )}
    </CardWrapper>
  );
};

export default QuestionStack;