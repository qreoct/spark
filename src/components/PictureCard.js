import React, {useEffect, useState} from 'react';

import picturesService from '../services/pictures'

import Util from '../utils/utils'
import PictureGallery from './PictureGallery';

const PictureCard = ({topic, data, isActive, mode}) => {

  const [pic, setPicture] = useState([]);
  const [question, setQuestion] = useState('');

  useEffect(async () => {
    if (data.this) {
      let options = [data.this, data.that];
      Util.shuffle(options);
      if(mode === 'this-or-that'){
        setQuestion(`${options[0]} or ${options[1]}?`);
      }
      let pic_this = await picturesService.pictureByQueryCount(data.this,1);
      let pic_that = await picturesService.pictureByQueryCount(data.that,1);
      setPicture([...pic_this, ...pic_that]);
    } else {
      let res = await picturesService.pictureByTopicCount(topic,6);
      setPicture([...res]);
    }
    setQuestion(data.question);
  }, [])

  const renderPicture = () => {
    if (Object.keys(pic).length === 0) {
      // if initial data for picture is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <PictureGallery pictures={pic}/>
      );
    }
  };

  return (
    <div className={`${isActive ? 'active' : 'inactive'} card__picture`}>
      <div style={{margin:'20px'}}>
        <p className="card__picture--question"> {question} </p>
      </div>

      {renderPicture()}
    </div>
  );
};

export default PictureCard;