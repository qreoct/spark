import React, { useState } from 'react';

const PictureGallery = ({pictures=[], isSelectable=false, handleSelect}) => {

  const [select, setSelect] = useState(null);

  const submitSelect = () => {
    if(select == null) {
      alert('You did not select!');
    } else {
      handleSelect(select)
    }
  }

  const toggleSelect = (e, pic) => {
    e.preventDefault();
    if ( select === null || select.id != pic.id) {
      setSelect(pic)
    } else {
      setSelect(null)
    }
  }

  const renderGallery = () => {
    if (pictures.length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <>
          <div className="card__picture--gallery">
            {pictures.map(pic => 
              <div key={pic.id} 
                className={`card__picture--container ${isSelectable ? 'selectable' : ''} 
                ${(select) ? select.id==pic.id ? 'selected' : '' : ''}`}
                onTouchEnd={(e) => toggleSelect(e, pic)}
                onMouseUp={(e) => toggleSelect(e, pic)}
                data-testid="gallery-picture">
                <img src={pic.urls.small} alt={pic.alt_description}
                  className={`card__picture--thumb ${(pictures.length === 1) ? 'card__picture--solo' : ''}`}/>
              </div>
            )}

          </div>
        
          <div>
            {isSelectable ? <button onClick={submitSelect} className="input--button --amethyst selectable"> Select </button> : null}
          </div>
        </>
      );
    }
  };

  return (
    renderGallery()
  );
};

export default PictureGallery;