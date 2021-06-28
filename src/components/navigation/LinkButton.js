import React from 'react';

const LinkButton = ({title, subtitle, action}) => {

  const buttonAction = action === undefined ? action : action;

  return (
    <div className="menu__linkbutton selectable" onClick={buttonAction}>
      <span className="menu__linkbutton--title"> {title} </span> <br/>
      <span className="menu__linkbutton--subtitle"> {subtitle} </span>
    </div>
  );
};

export default LinkButton;