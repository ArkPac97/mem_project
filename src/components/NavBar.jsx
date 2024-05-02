// src/components/NavigationBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className='nav__bar'>
      <div className='nav__bar-home' onClick={() => navigate("/")}>
        <img className='nav__bar-img' src="./header_icon.png" alt="Home Icon" />
        <h2 className='nav__bar-header'>mem serwis</h2>
      </div>
      <div className='nav__bar-navigation_btns'>
        <button className='nav__bar-navigation_btn home__btn' onClick={() => navigate("/")}>home</button>
        <button className='nav__bar-navigation_btn hot__btn' onClick={() => navigate("/hot")}>hot</button>
        <button className='nav__bar-navigation_btn regular__btn' onClick={() => navigate("/regular")}>regular</button>
        <button className='nav__bar-navigation_btn mybest__btn' onClick={() => navigate("/mybest")}>my best</button>
      </div>
    </nav>
  );
}

export default NavBar;
