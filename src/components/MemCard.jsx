import React, { useState } from 'react';
import memData from '../data/mems.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown);

function MemCard() {
  const [upvotes, setUpvotes] = useState(memData[0].upvotes);
  const [downvotes, setDownvotes] = useState(memData[0].downvotes);
  const [bounceUp, setBounceUp] = useState(false);
  const [bounceDown, setBounceDown] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  const triggerBounceUp = () => {
    setUpvotes(upvotes + 1);
    setBounceUp(true);
    setTimeout(() => setBounceUp(false), 1000);
  };

  const triggerBounceDown = () => {
    setDownvotes(downvotes + 1); 
    setBounceDown(true);
    setTimeout(() => setBounceDown(false), 1000);
  };

  const toggleFavorite = () => {
    setFavoriteClicked(true);
    setTimeout(() => setFavoriteClicked(false), 100);
  };


  return (
    <div className='mem__card'>
      <h1 className='mem__card-title'>{memData[0].title}</h1>
      <div className='mem__card-mem'>
        <img className='mem__slide-left' src="./arrow_left.png" alt="arrow_left" />
        <img src={memData[0].img} alt="Meme" />
        <img className='mem__slide-right' src="./arrow_right.png" alt="arrow_right" />
      </div>
      <button className='favorite__btn' onClick={toggleFavorite}>
        <img className={`favorite__btn-icon ${favoriteClicked ? 'scale-down' : ''}`} src="./favorite.png" alt="Favorite button" />
      </button>
      <div className='vote__btns'>
        <button className='vote__btns-up vote__btn' onClick={triggerBounceUp}>
          {upvotes}
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className={`${bounceUp ? 'bounce' : ''} icon-margin`} />
        </button>
        <button className='vote__btns-down vote__btn' onClick={triggerBounceDown}>
          {downvotes}
          <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className={`${bounceDown ? 'bounce' : ''} icon-margin`} />
        </button>
      </div>
    </div>
  );
}

export default MemCard;
