import React from "react";

const Picture = ({data}) => {

  const renderPicture = () => {
    if (Object.keys(data).length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className="game__picture">
          <a href={data.links.html}>
            <img src={data.urls.small} alt={data.alt_description} className="card__picture--thumb"/>
          </a>
          <p> Picture by&nbsp;
            <a href={data.links.html } className="link">{data.user.name}</a> on &nbsp;
            <a href="https://unsplash.com" className="link">Unsplash</a>
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderPicture()}
    </div>
  );
};

export default Picture;