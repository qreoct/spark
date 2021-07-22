import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import SoloGame from './pages/SoloGame';
import GroupGame from './pages/GroupGame';
import Profile from './pages/Profile';
import About from './pages/About';
import OnlineGame from './pages/OnlineGame';
import MenuHeader from './components/navigation/MenuHeader';
import MenuRouter from './components/navigation/MenuRouter';
import JoinPage from './pages/JoinPage'
import CreatePage from './pages/CreatePage'
import WaitingPage from './pages/WaitingPage'
import JourneyPage from './pages/JourneyPage';

const App = () => {

  const [page, setPage] = useState('home');

  const navigate = (target) => {
    setPage(target);
  };

  useEffect(() => {
    // reset for Milestone 3
    if (localStorage.getItem('m3')) {
      return
    } else {
      localStorage.setItem('solo_index', '0')
      localStorage.removeItem('solo_questions')
      localStorage.setItem('m3', 'true');
    }
  }, [])

  return (
    <Router>
      <div className="site__container">
                     
        <Switch>
          <Route path="/online/:roomCode">
            <div className="game__container">
              <OnlineGame />
            </div>
          </Route>
          <Route path='/random'>
            <div className='game__container'>
              <WaitingPage />
            </div>
          </Route>
          <Route path='/join'>
            <div className="game__container">
              <JoinPage />
            </div>
          </Route>
          <Route path="/create">
            <div className="game__container">
              <CreatePage />
            </div>
          </Route>
          <Route path="/game">
            <div className="game__container">
              <GroupGame />
            </div>
          </Route>
          <Route path="/solo">
            <SoloGame />
          </Route>
          <Route path="/about">
            <div className="menu__content-container">
              <div className="menu__content--data">
                <MenuHeader />
                <About />
              </div>
            </div>
          </Route>
          <Route path="/profile/:id">
            <div className="menu__content-container">
              <div className="menu__content--data">
                <JourneyPage/>
              </div>
            </div>
          </Route>
          <Route path="/profile">
            <div className="menu__content-container">
              <div className="menu__content--data">
                <Profile setPage={navigate} />
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="menu__content-container">
              <div className="menu__content--data">
                <MenuHeader />
                <MenuRouter setPage={navigate} />
              </div>
            </div>
          </Route>
        </Switch>


      </div>
      
    </Router>
  );
};

export default App;