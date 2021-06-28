import React from 'react';

import Util from '../../utils/utils'

import '../../styles/index.css';

const JourneyEntry = ({data}) => {

  const Entry = () => {
    return (
      <>
        <h1> My Journey </h1>
        <div className="profile__container entry">
          <div>
            <p className="profile__journey-entry--title"> {data.question} </p>
            <p className="profile__journey-entry--date"> {Util.timestampToString(data.timestamp)} </p>

            {data.picture ? 
              <div className="profile__journey-entry--pic-container">
                <img src={data.picture.pic.urls.small} className="profile__journey-entry--pic"/>
              </div>
              : null }
          </div>
          <p className="profile__journey-entry--reflection">{data.reflection} </p>
        </div>
      </>
    )
  }

  return (
    (data) ? Entry() : null
  )
}

export default JourneyEntry;