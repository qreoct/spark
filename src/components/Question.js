import React from 'react';

const Question = ({data}) => {

  const renderQuestion = () => {
    if (Object.keys(data).length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className="game__question-card">
          <p className="game__question-card--title"> {data.question} </p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderQuestion()}
    </div>
  );
};

export default Question;