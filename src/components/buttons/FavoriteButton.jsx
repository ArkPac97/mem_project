// src/components/buttons/FavoriteButton.jsx
import React from 'react';

const FavoriteButton = ({ isClicked, onClick }) => (
  <button className='favorite__btn' onClick={onClick}>
    <img className={`favorite__btn-icon ${isClicked ? 'scale-down' : ''}`} src="./favorite.png" alt="Favorite button" />
  </button>
);

export default FavoriteButton;
