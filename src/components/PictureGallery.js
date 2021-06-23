import React from 'react';

const PictureGallery = ({pictures}) => {

  const renderGallery = () => {
    if (pictures.length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className="card__picture--gallery">
          {pictures.map(pic => 
            <div key={pic.id} className='card__picture--container'>
              <a href={`${pic.links.html}?utm_source=spark&utm_medium=referral`} target="_blank" rel="noreferrer" className="card__picture">
                <img src={pic.urls.small} alt={pic.alt_description}
                  className={`card__picture--thumb ${(pictures.length === 1) ? 'card__picture--solo' : ''}`}/>
              </a>
              {/* <p> Picture by&nbsp;
                <a href={pic.links.html} className="link">{pic.user.name}</a> from&nbsp;
                <a href="https://unsplash.com" className="link">Unsplash</a>
              </p> */}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    renderGallery()
  );
};

export default PictureGallery;