import React from 'react';
import BackButton from '../components/navigation/BackButton.js';
import '../styles/index.css';

const About = () => {

  return (
    <div>
      <h1> About </h1>
      <p> <strong> SPARK </strong> is an app for creating meaningful conversations. </p>

      <p> This app was created for Orbital 2021.<br/>
          Images are from <a className="text__link" href="https://unsplash.com">Unsplash</a>, with icons from Font Awesome. <br/>
          Check out our <a className="text__link" href="https://sparkblog.netlify.app">development blog</a> and <a className="text__link" href="https://github.com/qreoct/spark">Github repositories</a>.
      </p>

      <h1> Privacy </h1>
      <p>We believe that your self-reflection is most meaningful when it is private.
         That’s why we do not store any of your data, chat logs, and preferences on any server.</p>
      <p>
        Your responses in the Solo mode are only stored in your browser.
        Note that clearing your browser data leads to loss of game data!
      </p>

      <div className="menu__navigation--container">
        <BackButton />
      </div>
    </div>
  );

};

export default About;