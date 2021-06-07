import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Question = ({data, isFavoritible=true}) => {

  let colors = ['game__question-card--yellow', 'game__question-card--magenta', 'game__question-card--cyan'];

  const renderQuestion = () => {
    if (Object.keys(data).length === 0) {
      // if initial data for question is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className={`game__question-card ${colors[0]}`}>
          <p className="game__question-card--title"> {data.question} </p>

          {isFavoritible 
            ? <div className="game__question-card--icons-container"> 
              <FontAwesomeIcon icon={faStar} className="game__question-card--icon" size='3x'
                onMouseUp={() => alert('fav' + data.question)} 
                onTouchEnd={() => alert('fav')} />
              <FontAwesomeIcon icon={faShareAlt} className="game__question-card--icon" size='3x'
                onMouseUp={() => alert('share' + data.question)} 
                onTouchEnd={() => alert('share')} />
            </div> 
            : <p> </p>
          }
        </div>
      );
    }
  };

  return (
    <div className="game__question-card--content-container">
      {renderQuestion()}
    </div>
  );
};

export default Question;