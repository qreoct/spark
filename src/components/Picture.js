import React from 'react';

const Picture = ({data, question}) => {

  const qn = question || '';

  const renderPicture = () => {
    if (Object.keys(data).length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className="game__picture--container">
          <a href={data.links.html} target="_blank" rel="noreferrer" className="card__picture">
            <img src={data.urls.small} alt={data.alt_description} className="card__picture--thumb"/>
            <span> <img src={data.urls.regular} alt={data.alt_description} className="card__picture--full"/> </span>
          </a>
          <p> Picture by&nbsp;
            <a href={data.links.html} className="link">{data.user.name}</a> from&nbsp;
            <a href="https://unsplash.com" className="link">Unsplash</a>
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <div style={{marginBottom:'20px'}}>
        <p className="card__picture--question"> {qn} </p>
      </div>

      {renderPicture()}
    </div>
  );
};

export default Picture;