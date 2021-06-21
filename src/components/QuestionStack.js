import React, {useState, useEffect} from 'react';
import Question from '../components/Question';
import {Card, CardWrapper} from 'react-swipeable-cards';

const QuestionStack = ({questions, isFavoritible, displayToast}) => {

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
    console.log('index: ' + index + ' end: ' + end);
    console.log('questions:' + questions.slice(index,end))
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
      {qnList.map(q => 
        <Card key={q.id} onSwipe={handleSwipe} style={clearStyle}>
          <Question data={q} isFavoritible={isFavoritible} displayToast={displayToast}
            color={colors[Math.floor(Math.random() * colors.length)]}/>
        </Card>
      )}
    </CardWrapper>
  );
};

export default QuestionStack;