import React from 'react';
import BackButton from '../components/BackButton.js';
import '../styles/index.css';

const About = () => {

  return (
    <div>
      <h1> About </h1>
      <p> <strong> SPARK </strong> is an app for creating meaningful conversations. </p>

      <p> This app was created for Orbital 2021.  <br/>
          Images are from <a className="text__link" href="https://unsplash.com">Unsplash</a>, Icons from Noun Project, Icons8, Typicons. <br/>
          Check out our <a className="text__link" href="https://sparkblog.netlify.app">blog</a> and Github
      </p>

      <h1> Privacy </h1>
      <p>We believe that your self-reflection is most meaningful when it is private.
         That’s why we do not store any of your data on any server, and there is no account system.

        Your responses in the Solo mode are only stored in your browser.
      </p>

      <div className="menu__navigation--container">
        <BackButton />
      </div>
    </div>
  );

};

export default About;