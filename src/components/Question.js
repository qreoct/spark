import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { fas, faStar as faStar_solid} from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import Util from '../utils/utils'

const Question = ({data, isFavoritible=true, color='cyan', displayToast}) => {

  const [isFav, setIsFav] = useState(false);
  const [favIcon, setFavIcon] = useState(faStar);
  
  const handleFav = () => {
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
        text: data.question,
      }).catch((error) => console.log('Error sharing', error))
    }
  }

  useEffect(() => {
    console.log('is in Favs: ' + data.question   + ' ' + Util.isInFavs(data))
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
        <div className={`game__question-card game__question-card--${color}`}>
          <p className="game__question-card--title"> {data.question} </p>

          {isFavoritible 
            ? <div className="game__question-card--icons-container"> 
              <FontAwesomeIcon icon={favIcon} className="game__question-card--icon" size='3x'
                onMouseUp={handleFav} 
                onTouchEnd={handleFav}
                title={isFav ? 'Remove from favourites' : 'Add to favourites'} />
              <FontAwesomeIcon icon={faShareAlt} className="game__question-card--icon" size='3x'
                onMouseUp={handleShare} 
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

export default Question;