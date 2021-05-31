import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import SoloGame from './pages/SoloGame';
import Game from './pages/Game';
import Profile from './pages/Profile';
import About from './pages/About';
import OnlineGame from './pages/OnlineGame';
import MenuHeader from './components/MenuHeader';
import MenuRouter from './components/MenuRouter';
import PicturePage from './pages/PicturePage';

const App = () => {

  const [page, setPage] = useState('home');
  const [mode, setMode] = useState('none');

  const navigate = (target) => {
    setPage(target);
  };

  return (
    <Router>
      <div className="site__container">
        
        <div className="menu__content--container">
          <div className="menu__content--data">
            
            <Switch>
              <Route path="/online">
                <OnlineGame />
              </Route>
              <Route path="/picture">
                <PicturePage />
              </Route>
              <Route path="/game">
                <Game mode={mode}/>
              </Route>
              <Route path="/solo">
                <SoloGame />
              </Route>
              <Route path="/about">
                <MenuHeader />
                <About />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <MenuHeader />
                <MenuRouter setPage={navigate} setMode={setMode}/>
              </Route>
            </Switch>
        
          </div>
        </div>


      </div>
      
    </Router>
  );
};

export default App;