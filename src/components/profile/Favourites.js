import React from 'react';

import {Link} from 'react-router-dom';

const Favourites = ({favs, setPage, setMode}) => {

  const renderFavourites = () => {
    if (favs.length > 0) {
      return(
        
        <Link to="/game" onClick={() => {setPage('game'); setMode('favourites')}}>
          <div className="profile__container selectable">
            <h1> Favourites </h1>
          You have {favs.length} favourited cards.
          </div>
        </Link>
      )
    } else {
      return (
        <div className="profile__container">
          <h1> Favourites </h1>
          You have no favourited cards. Click the * icon on any card to add them to favourites!
        </div>
      )
    }
  }

  return (
    <div>
      {renderFavourites()}
    </div>
  );
};

export default Favourites;