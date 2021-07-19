import React, {useEffect, useState} from 'react';

import picturesService from '../../services/pictures'

import Util from '../../utils/utils'
import PictureGallery from './PictureGallery';

const PictureCard = ({topic, data, isActive, mode, isSelectable=false, handleSelect}) => {

  const [pic, setPicture] = useState([]);
  const [question, setQuestion] = useState('Loading question...');

  useEffect(async () => {
    if (data.this) {
      // this-or-that mode
      let options = [data.this, data.that];
      Util.shuffle(options);
      if(mode === 'this-or-that'){
        setQuestion(`${options[0]} or ${options[1]}?`);
      }
      let pic_this = await picturesService.pictureByQueryCount(data.this,1);
      let pic_that = await picturesService.pictureByQueryCount(data.that,1);
      setPicture([...pic_this, ...pic_that]);
    } else if (data.pic) {
      // contains picture already
      setPicture([data.pic]); 
    } else if (mode === 'online') {
      // fetch a picture otherwise
      let res = await picturesService.pictureByTopicCount(topic,2);
      setPicture([...res]);
    } else {
      // fetch a picture otherwise
      let res = await picturesService.pictureByTopicCount(topic,5);
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
        <PictureGallery pictures={pic} isSelectable={isSelectable} handleSelect={handleSelect}/>
      );
    }
  };

  return (
    <div data-testid="picture-card" className={`picture-card ${isActive ? 'active' : 'inactive'} ${isSelectable ? '' : 'disable--select'}`}>
      <div style={{margin:'20px'}}>
        <p className="picture-card__question"> {question} </p>
      </div>

      {renderPicture()}
    </div>
  );
};

export default PictureCard;