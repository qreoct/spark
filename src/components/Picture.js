import React, {useEffect} from 'react';

import {connect} from 'react-redux';

import {fetchPicture, pictureByTopic} from '../actions/picturesActions';

const Picture = ({dispatch, data, pictures, topic, question, isActive}) => {

  const qn = question || '';

  console.log('topic: ' + topic);

  useEffect(() => {
    if (data) { 
      dispatch(fetchPicture());
    } else {
      dispatch(pictureByTopic(topic));
    }
  }, [dispatch])

  const renderPicture = () => {
    if (Object.keys(pictures).length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className='game__picture'>
          <a href={`${pictures.links.html}?utm_source=spark&utm_medium=referral`} target="_blank" rel="noreferrer" className="card__picture">
            <img src={pictures.urls.small} alt={pictures.alt_description} className="card__picture--thumb"/>
            <span> <img src={pictures.urls.regular} alt={pictures.alt_description} className="card__picture--full"/> </span>
          </a>
          <p> Picture by&nbsp;
            <a href={pictures.links.html} className="link">{pictures.user.name}</a> from&nbsp;
            <a href="https://unsplash.com" className="link">Unsplash</a>
          </p>
        </div>
      );
    }
  };

  return (
    <div className={`${isActive ? 'active' : 'inactive'}`}>
      <div style={{marginBottom:'20px'}}>
        <p className="card__picture--question"> {qn} </p>
      </div>

      {renderPicture()}
    </div>
  );
};


const mapStateToProps = (state) => ({
  loading: state.pictures.loading,
  pictures: state.pictures.pictures,
  hasErrors: state.pictures.hasErrors,
});

export default connect(mapStateToProps)(Picture);