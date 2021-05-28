import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import SoloGame from './pages/SoloGame';
import Game from './pages/Game';
import Profile from './pages/Profile';
import About from './pages/About';
import MenuHeader from './components/MenuHeader';
import MenuRouter from './components/MenuRouter';
import PicturePage from './pages/PicturePage';

const App = () => {

  const [page, setPage] = useState('home');

  const navigate = (target) => {
    setPage(target);
  };

  return (
    <Router>
      <div className="site__container">

        <span className="debug"> Current page: {page} </span>
        
        <div className="menu__content--container">
          <div className="menu__content--data">
            
            <Switch>
              <Route path="/picture">
                <PicturePage />
              </Route>
              <Route path="/game">
                <Game />
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
                <MenuRouter setPage={navigate}/>
              </Route>
            </Switch>
        
          </div>
        </div>


      </div>
      
    </Router>
  );
};

export default App;