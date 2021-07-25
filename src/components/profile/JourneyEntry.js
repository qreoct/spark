import React from 'react';

import Util from '../../utils/utils'


const JourneyEntry = ({data}) => {

  const Entry = () => {
    return (
      <>
        <h1> My Journey </h1>
        <div className="profile__container journey-entry">
          <div>
            <p className="journey-entry__title"> {data.question} </p>
            <p className="journey-entry__date"> {Util.timestampToString(data.timestamp)} </p>

            {data.picture ? 
              <div className="journey__pic-container">
                <img src={data.picture.pic.urls.small} className="journey-entry__pic"/>
              </div>
              : null }
          </div>
          <p className="journey-entry__reflection">{data.reflection} </p>
        </div>
      </>
    )
  }

  return (
    (data) ? Entry() : null
  )
}

export default JourneyEntry;