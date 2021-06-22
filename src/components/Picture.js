import React, {useEffect, useState} from 'react';

import picturesService from '../services/pictures'

const Picture = ({topic, question, isActive}) => {

  const qn = question || '';

  const [data, setData] = useState({});

  useEffect(async () => {
    if(topic) {
      let res = await picturesService.pictureByTopic(topic);
      setData(res);
    } else {
      let res = await picturesService.getPictureFromUnsplash();
      setData(res);
    }
  }, [])

  const renderPicture = () => {
    if (Object.keys(data).length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className='card__picture--container'>
          <a href={`${data.links.html}?utm_source=spark&utm_medium=referral`} target="_blank" rel="noreferrer" className="card__picture">
            <img src={data.urls.small} alt={data.alt_description} className="card__picture--thumb"/>
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
    <div className={`${isActive ? 'active' : 'inactive'} card__picture`}>
      <div style={{marginBottom:'20px'}}>
        <p className="card__picture--question"> {qn} </p>
      </div>

      {renderPicture()}
    </div>
  );
};

export default Picture;