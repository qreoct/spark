import React from 'react';

const LinkButton = ({title, subtitle}) => {

  return (
    <div className="menu__linkbutton">
      <span className="menu__linkbutton--title"> {title} </span> <br/>
      <span className="menu__linkbutton--subtitle"> {subtitle} </span>
    </div>
  );
};

export default LinkButton;