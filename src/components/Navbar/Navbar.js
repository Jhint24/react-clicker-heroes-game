import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Clicker Heroes Clicky Game</span>
    <div className="click-start">{props.navMessage}</div>
    <div className="score-class">
      Score: {props.score} <span>||</span> High Score: {props.highScore}
    </div>
  </nav>
);

export default Navbar;
