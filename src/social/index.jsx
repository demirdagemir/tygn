import React from "react";
import '../App.css';

import amazon from "./amazon.svg";
import apple from "./apple.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import soundcloud from "./soundcloud.svg";
import spotify from "./spotify.svg";
import tidal from "./tidal.svg";
import twitter from "./twitter.svg";
import youtube from "./youtube.svg";

function Social() {
  return (
    <div className="links">
      <a href="" alt="Amazon Music">
        <img src={amazon} />
      </a>
      <a href="" alt="Apple Music">
        <img src={apple} />
      </a>
      <a href="" alt="Facebook">
        <img src={facebook} />
      </a>
      <a href="" alt="Instagram">
        <img src={instagram} />
      </a>
      <a href="" alt="Soundcloud">
        <img src={soundcloud} />
      </a>
      <a href="" alt="Spotify">
        <img src={spotify} />
      </a>
      <a href="" alt="Tidal">
        <img src={tidal} />
      </a>
      <a href="" alt="Twitter">
        <img src={twitter} />
      </a>
      <a href="" alt="Youtube">
        <img src={youtube} />
      </a>
    </div>
  )
}

export default Social;
