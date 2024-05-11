// src/components/MemCard.jsx
import React, { useState, useContext } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import VoteButton from './buttons/VoteButton';
import FavoriteButton from './buttons/FavoriteButton';
import SlideButtons from './buttons/SlideButtons';
import MemsContext from '../store/MemsContext';

library.add(faThumbsUp, faThumbsDown);

function MemCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mems, vote, toggleFavorite } = useContext(MemsContext);
  const [bounceUp, setBounceUp] = useState(false);
  const [bounceDown, setBounceDown] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  const triggerVote = (type) => {
    vote(mems[currentIndex].id, type);
    if (type === 'up') {
      setBounceUp(true);
      setTimeout(() => setBounceUp(false), 1000);
    } else {
      setBounceDown(true);
      setTimeout(() => setBounceDown(false), 1000);
    }
  };

  const toggleFav = () => {
    toggleFavorite(mems[currentIndex].id);
    setFavoriteClicked(true);
    setTimeout(() => setFavoriteClicked(false), 100);
  };

  const goToNextMem = () => {
    setCurrentIndex((currentIndex + 1) % mems.length);
  };

  const goToPrevMem = () => {
    setCurrentIndex(currentIndex === 0 ? mems.length - 1 : currentIndex - 1);
  };

  return (
    <div className='mem__card'>
      <h1 className='mem__card-title'>{mems[currentIndex].title}</h1>
      <div className='mem__card-mem'>
        <SlideButtons goToPrevMem={goToPrevMem} goToNextMem={goToNextMem} />
        <img src={mems[currentIndex].img} alt="Meme" />
      </div>
      <FavoriteButton isClicked={favoriteClicked} onClick={toggleFav} />
      <div className='vote__btns'>
        <VoteButton count={mems[currentIndex].upvotes} icon="fa-solid fa-thumbs-up" isBouncing={bounceUp} onClick={() => triggerVote('up')} voteType="up" />
        <VoteButton count={mems[currentIndex].downvotes} icon="fa-solid fa-thumbs-down" isBouncing={bounceDown} onClick={() => triggerVote('down')} voteType="down" />
      </div>
    </div>
  );
}

export default MemCard;
