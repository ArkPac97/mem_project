// src/components/MemCard.jsx
import React, { useState, useEffect } from 'react';
import memsData from '../data/mems.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import VoteButton from './buttons/VoteButton';
import FavoriteButton from './buttons/FavoriteButton';
import SlideButtons from './buttons/SlideButtons';

library.add(faThumbsUp, faThumbsDown);

function MemCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [memData, setMemData] = useState(() => {
    const localData = localStorage.getItem('memData');
    if (localData) {
      return JSON.parse(localData);
    } else {
      return memsData.map((mem, index) => ({
        ...mem,
        id: mem.id || `mem-${index}`
      }));
    }
  });

  const [bounceUp, setBounceUp] = useState(false);
  const [bounceDown, setBounceDown] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem('memData', JSON.stringify(memData));
  }, [memData]);

  const triggerVote = (type) => {
    const updatedMems = memData.map((mem, index) => {
      if (index === currentIndex) {
        if (type === 'up') {
          return { ...mem, upvotes: mem.upvotes + 1 };
        } else {
          return { ...mem, downvotes: mem.downvotes + 1 };
        }
      }
      return mem;
    });
    setMemData(updatedMems);
  };

  const triggerBounceUp = () => {
    triggerVote('up');
    setBounceUp(true);
    setTimeout(() => setBounceUp(false), 1000);
  };

  const triggerBounceDown = () => {
    triggerVote('down');
    setBounceDown(true);
    setTimeout(() => setBounceDown(false), 1000);
  };

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const currentMem = memData[currentIndex];

    if (!favorites.some(mem => mem.id === currentMem.id)) {
      favorites.push({ ...currentMem, favorite: 1 });

      localStorage.setItem('favorites', JSON.stringify(favorites));

      const updatedMemData = memData.map(mem => 
        mem.id === currentMem.id ? {...mem, favorite: 1} : mem
      );
      setMemData(updatedMemData);
    }

    setFavoriteClicked(true);
    setTimeout(() => setFavoriteClicked(false), 100);
  };

  const goToNextMem = () => {
    setCurrentIndex((currentIndex + 1) % memData.length);
  };

  const goToPrevMem = () => {
    setCurrentIndex(currentIndex === 0 ? memData.length - 1 : currentIndex - 1);
  };

  return (
    <div className='mem__card'>
      <h1 className='mem__card-title'>{memData[currentIndex].title}</h1>
      <div className='mem__card-mem'>
        <SlideButtons goToPrevMem={goToPrevMem} goToNextMem={goToNextMem} />
        <img src={memData[currentIndex].img} alt="Meme" />
      </div>
      <FavoriteButton isClicked={favoriteClicked} onClick={toggleFavorite} />
      <div className='vote__btns'>
        <VoteButton count={memData[currentIndex].upvotes} icon="fa-solid fa-thumbs-up" isBouncing={bounceUp} onClick={triggerBounceUp} voteType="up" />
        <VoteButton count={memData[currentIndex].downvotes} icon="fa-solid fa-thumbs-down" isBouncing={bounceDown} onClick={triggerBounceDown} voteType="down" />
      </div>
    </div>
  );
}

export default MemCard;
