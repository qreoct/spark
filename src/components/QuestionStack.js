import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import Question from '../components/Question';

const QuestionStack = ({questions}) => {

  const [qnList, setQnList] = useState([]);
  let idx = 0;
  const [index, setIndex] = useState(idx);

  useEffect(() => {
    setQnList(questions.slice(0,5));
  }, []);

  const handleSwipe = () => {
    let offset = 5;
    setIndex({index} + 1);
    console.log(index, index+offset);
    setQnList(questions.slice(index, index+offset));

    // let popped = questions.splice(0,1);
    // let newList = qnList.slice(1);
    // setQnList(newList.concat(popped));
  }

  return (
    <div className="game__question-card--container">
      {qnList.reverse().map(q => 
        <TinderCard className="swipe" key={q.id} flickOnSwipe='false' onSwipe={handleSwipe}>
          <Question key={q.id} data={q} isFavoritible={false}/>
        </TinderCard>
      )}

      <ul style={{padding:'500px'}}>
        {qnList.length}
        {qnList.reverse().map(q => 
          <li key={`${q.id}2`}> {q.question} </li>
        )}
      </ul>
    </div>
  );
};

export default QuestionStack;