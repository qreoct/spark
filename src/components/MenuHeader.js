import React from 'react';
import Logo from '../assets/Logo_conversations.svg';

const MenuHeader = () => {

  return (
    <div className="menu__sparklogo--container">
      <img src={Logo} className="site__sparklogo" alt="SPARK logo"/>
    </div>
  );
};

export default MenuHeader;