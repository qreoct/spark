import React from 'react';

const ProgressBar = ({ color, completed }) => {

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: `${completed === 0 ? 'white' : 'black'}`,
    fontWeight: 'bold'
  }

  return (
    <div >
      <div style={fillerStyles} className={`--${color}`}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;