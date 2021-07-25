import React, {useState, useEffect} from 'react';
import Favourites from '../components/profile/Favourites';
import NavBar from '../components/navigation/NavBar';
import Util from '../utils/utils'
import JourneyStack from '../components/profile/JourneyStack';

import {connect} from 'react-redux';
import { setCurrentMode } from '../reducers/modeReducer';

const Profile = ({dispatch, mode, setPage}) => {

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favs')) {
      setFavs(Util.readFavsFromStorage());
    }
    setMode('profile');
  }, []);

  const setMode = (mode) => {
    dispatch(setCurrentMode(mode));
  }

  return (
    <div>
      <div className="profile">
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

const mapStateToProps = (state) => ({
  mode: state.solo.mode
});

export default connect(mapStateToProps)(Profile);