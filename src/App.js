import React from 'react';
import logo from './logo.svg';
import Socials from './social';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} className="band-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
      <div className="info">
        <div className="bio">
          <p>Hi 👋,</p>
          <p>It's <span className="band-name">Thank You & Good Night</span> from Munich, 🇩🇪.
          We are Emir, Andreas, Oliver and Maxi.
          Check out our music below and stay tuned for our next shows.</p>
          <p>Cheers ✌️</p>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default App;
