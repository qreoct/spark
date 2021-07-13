import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const BackButton = ({action, text}) => {

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const buttonAction = action === undefined ? goBack : action;
  const buttonText = text === undefined ? 'back' : text;

  return (
    <div className="menu__linkbutton--back" onClick={buttonAction} >
      <FontAwesomeIcon icon={faChevronLeft} /> {buttonText}
    </div>
  );
};
    
export default BackButton;
