import React from 'react';

const ProgressBar = ({ completed }) => {

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    textAlign: 'right',
    transition: 'width 0.5s ease-in-out'
  }

  const labelStyles = {
    padding: 5,
    color: `${completed === 0 ? 'white' : 'black'}`,
    fontWeight: 'bold'
  }

  return (
    <div>
      <div style={fillerStyles} className={'--spark'}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;