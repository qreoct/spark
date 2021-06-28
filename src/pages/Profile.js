import React, {useState, useEffect} from 'react';
import Favourites from '../components/profile/Favourites';
import NavBar from '../components/navigation/NavBar';
import Util from '../utils/utils'
import '../styles/index.css';
import JourneyStack from '../components/profile/JourneyStack';

const Profile = ({mode, setPage, setMode}) => {

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favs')) {
      setFavs(Util.readFavsFromStorage());
    }
  }, []);

  return (
    <div>
      <div className="game__profile--container">
        <h1> My Profile </h1>

        <div> 
          <Favourites favs={favs} setPage={setPage} setMode={setMode}/>
        </div>

        <JourneyStack />

      </div>

      <NavBar mode={mode}/>
    </div>
  );

};

export default Profile;