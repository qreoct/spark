import React, {useEffect, useState} from 'react';
import Util from '../../utils/utils'
import HelpModal from './HelpModal';

const HelpButton = ({mode}) => {

  const [visible,setVisible] = useState(false);

  useEffect(() => {
    if (Util.hasOnbording(mode)) {
      setVisible(true);
    }
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    setVisible(true)
  }

  const setInvisible = () => {
    setVisible(false);
  }

  return (
    <>
      {visible 
        ? <HelpModal mode={mode} setInvisible={setInvisible}/>
        : null
      }

      <div className="navbar__button-container">
        <div className="menu__linkbutton--back"
          onMouseUp={handleClick}
          onTouchEnd={handleClick}> help </div> 
      </div>
    </>
  )

}

export default HelpButton;