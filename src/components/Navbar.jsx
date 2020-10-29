import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {

  const history = useHistory();

  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1 onClick={() => {
        history.push('/')
      }} >Crypto Tracker</h1>
      <h2 onClick={() => {
        history.push(`/trending`)
      } } >Trending</h2>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
