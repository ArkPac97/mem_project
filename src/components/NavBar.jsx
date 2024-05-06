// src/components/NavigationBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('/');

  const handleNavigation = (path) => {
    navigate(path);
    setActiveButton(path);
  };

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
      <div className='nav__bar-home' onClick={() => handleNavigation("/")}>
        <img className='nav__bar-img' src="./header_icon.png" alt="Home Icon" />
        <h2 className='nav__bar-header'>mem serwis</h2>
      </div>
      <div className='nav__bar-navigation_btns'>
        {buttons.map((btn, idx) => (
          <button key={idx}
                  className={`nav__bar-navigation_btn ${btn.label.replace(' ', '__')}__btn ${activeButton === btn.path ? 'active' : ''}`}
                  onClick={() => handleNavigation(btn.path)}>
            {renderButtonLabel(btn.label, activeButton === btn.path)}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
