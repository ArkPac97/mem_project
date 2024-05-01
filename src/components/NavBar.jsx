// src/components/NavigationBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>
        <img src="./cat_mem_icon.jpg" alt="Home Icon" />
        Home
      </button>
      <button onClick={() => navigate("/hot")}>HOT</button>
      <button onClick={() => navigate("/regular")}>REGULAR</button>
      <button onClick={() => navigate("/mybest")}>MY BEST</button>
    </nav>
  );
}

export default NavBar;
