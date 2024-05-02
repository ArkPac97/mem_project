import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown);

function MemCard({ title }) {
  const [bounceUp, setBounceUp] = useState(false);
  const [bounceDown, setBounceDown] = useState(false);

  const triggerBounceUp = () => {
    setBounceUp(true);
    setTimeout(() => setBounceUp(false), 1000);
  };

  const triggerBounceDown = () => {
    setBounceDown(true);
    setTimeout(() => setBounceDown(false), 1000);
  };

  return (
    <div className='mem__card'>
      <h1 className='mem__card-title'>{title}</h1>
      <div className='mem__card-mem'>
        {/* mem */}
      </div>
      <button className='favorite__btn'>
        <img className='favorite__btn-icon' src="./favorite.png" alt="Favorite button" />
      </button>
      <div className='vote__btns'>
        <button className='vote__btns-up vote__btn' onClick={triggerBounceUp}>
          Licznik up
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className={bounceUp ? 'bounce' : ''} />
        </button>
        <button className='vote__btns-down vote__btn' onClick={triggerBounceDown}>
          Licznik down
          <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className={bounceDown ? 'bounce' : ''} />
        </button>
      </div>
    </div>
  );
}

export default MemCard;
