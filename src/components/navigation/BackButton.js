import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const BackButton = ({action}) => {

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const buttonAction = action === undefined ? goBack : action;

  return (
    <div className="menu__linkbutton--back" onClick={buttonAction} >
      <FontAwesomeIcon icon={faChevronLeft} /> back
    </div>
  );
};
    
export default BackButton;
