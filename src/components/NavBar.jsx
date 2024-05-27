// src/components/NavigationBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const renderButtonLabel = (label, isActive) => (
    <span className="button-label">
      {label.split('').map((char, index) => (
        <span key={index} className={`letter ${isActive ? `active-${index}` : ''}`}>{char}</span>
      ))}
    </span>
  );

  const buttons = [
    { path: '/', label: 'home' },
    { path: '/hot', label: 'hot' },
    { path: '/regular', label: 'regular' },
    { path: '/mybest', label: 'mybest' }
  ];

  return (
    <nav className='nav__bar'>
      <div className='nav__bar-home'>
        <NavLink to="/" className='nav__bar-home-link'>
          <img className='nav__bar-img' src="./header_icon.png" alt="Home Icon" />
          <h2 className='nav__bar-header'>mem serwis</h2>
        </NavLink>
      </div>
      <div className='nav__bar-navigation_btns'>
        {buttons.map((btn, idx) => (
          <NavLink 
            key={idx}
            to={btn.path}
            className={({ isActive }) => `nav__bar-navigation_btn ${btn.label.replace(' ', '__')}__btn ${isActive ? 'active' : ''}`}
          >
            {({ isActive }) => renderButtonLabel(btn.label, isActive)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
