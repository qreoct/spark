import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import SoloGame from './pages/SoloGame';
import GroupGame from './pages/GroupGame';
import Profile from './pages/Profile';
import About from './pages/About';
import OnlineGame from './pages/OnlineGame';
import MenuHeader from './components/MenuHeader';
import MenuRouter from './components/MenuRouter';
import PicturePage from './pages/PicturePage';
import ChatPage from './pages/ChatPage'

const App = () => {

  const [page, setPage] = useState('home');
  const [mode, setMode] = useState('none');

  const navigate = (target) => {
    setPage(target);
  };

  return (
    <Router>
      <div className="site__container">
                    
        <Switch>
          <Route path="/chat">
            <div className="game__container">
              <ChatPage />
            </div>
          </Route>
          <Route path="/online">
            <div className="game__container">
              <OnlineGame page={page}/>
            </div>
          </Route>
          <Route path="/picture">
            <div className="game__container">
              <PicturePage />
            </div>
          </Route>
          <Route path="/game">
            <div className="game__container">
              <GroupGame mode={mode}/>
            </div>
          </Route>
          <Route path="/solo">
            <div className="game__container">
              <SoloGame />
            </div>
          </Route>
          <Route path="/about">
            <div className="menu__content--container">
              <div className="menu__content--data">
                <MenuHeader />
                <About />
              </div>
            </div>
          </Route>
          <Route path="/profile">
            <div className="menu__content--container">
              <div className="menu__content--data">
                <Profile mode={mode}/>
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="menu__content--container">
              <div className="menu__content--data">
                <MenuHeader />
                <MenuRouter setPage={navigate} setMode={setMode}/>
              </div>
            </div>
          </Route>
        </Switch>


      </div>
      
    </Router>
  );
};

export default App;