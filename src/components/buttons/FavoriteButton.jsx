// src/components/buttons/FavoriteButton.jsx
import React from 'react';

const FavoriteButton = ({ favorite, isClicked, onClick }) => (
  <button className='favorite__btn' onClick={onClick}>
    <img
      className={`favorite__btn-icon ${isClicked ? 'scale-down' : ''}`}
      src={favorite ? './favorite_full_star.png' : './favorite.png'}
      alt="Favorite button"
    />
  </button>
);

export default FavoriteButton;
