import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStar_solid } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import Util from '../../utils/utils'

const QuestionCard = ({data, isFavoritible=true, color, displayToast, mode}) => {

  const [isFav, setIsFav] = useState(false);
  const [favIcon, setFavIcon] = useState(faStar);
  const [col, setColor] = useState(null);
  const [question, setQuestion] = useState('Loading question...');

  useEffect(() => {
    if (col == null) {
      setColor(color);  
    }

    if (mode === 'this-or-that') {
      let options = [data.this, data.that];
      Util.shuffle(options);
      setQuestion(`${options[0]} or ${options[1]}?`);
    } else {
      setQuestion(data.question);
    }
  }, [])
  
  const handleFav = (e) => {
    e.preventDefault();
    Util.toggleFromFavs(data);
    if (isFav) {
      displayToast('Removed from favourites');
    } else {
      displayToast('Added to favourites')
    }
    setIsFav(!isFav);
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SPARK Meaningful Conversations',
        text: question,
      }).catch((error) => console.log('Error sharing', error))
    } else {
      navigator.clipboard.writeText(question).then(() => {
        displayToast('Copied question to clipboard! Share it with your friends!')
      })
    }
  }

  useEffect(() => {
    setIsFav(Util.isInFavs(data));
  },[])

  useEffect(() => {
    if (isFav) { setFavIcon(faStar_solid) }
    else { setFavIcon(faStar) }
  }, [isFav])

  const renderQuestion = () => {
    if (Object.keys(data).length === 0) {
      // if initial data for question is not loaded yet
      // (Default is an empty Object)
      return null;
    } else {
      return (
        <div className={`game__question-card --${col}`}>
          <p className="game__question-card--title disable--select"> {question} </p>

          {isFavoritible 
            ? <div className="game__question-card--icons-container disable--select"> 
              <FontAwesomeIcon icon={favIcon} className="game__question-card--icon" size='3x'
                onClick={handleFav} 
                onTouchEnd={handleFav}
                title={isFav ? 'Remove from favourites' : 'Add to favourites'} />
              <FontAwesomeIcon icon={faShareAlt} className="game__question-card--icon" size='3x'
                onClick={handleShare} 
                onTouchEnd={handleShare}
                title="Share" />
            </div> 
            : <p> </p>
          }
        </div>
      );
    }
  };

  return (
    <div className="game__question-card--content-container">
      {renderQuestion()}
    </div>
  );
};

export default QuestionCard;