import React, { useEffect } from 'react';
import './Home.css';

function HomeRight() {
  return (
    <div className="HomeRight">
      <div className="my-info">
        <h3 className="typewriterText">Developer</h3>
        <h1 className="MyName">Pradyut</h1>
        <p>Pradyut is a full stack developer with experience in building web applications.</p>
        <div className="buttons">
          <button id="btnDownload">Download CV</button>
          <button id="btnContact">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
