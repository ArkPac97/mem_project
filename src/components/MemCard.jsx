import React, { useState, useEffect } from 'react';
import memsData from '../data/mems.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
      const newFavorite = {...currentMem, favorite: 1};
      favorites.push(newFavorite);
  
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
        <img className='mem__slide-left' src="./arrow_left.png" alt="arrow_left" onClick={goToPrevMem} />
        <img src={memData[currentIndex].img} alt="Meme" />
        <img className='mem__slide-right' src="./arrow_right.png" alt="arrow_right" onClick={goToNextMem} />
      </div>
      <button className='favorite__btn' onClick={toggleFavorite}>
        <img className={`favorite__btn-icon ${favoriteClicked ? 'scale-down' : ''}`} src="./favorite.png" alt="Favorite button" />
      </button>
      <div className='vote__btns'>
        <button className='vote__btns-up vote__btn' onClick={triggerBounceUp}>
          {memData[currentIndex].upvotes}
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className={`${bounceUp ? 'bounce' : ''} icon-margin`} />
        </button>
        <button className='vote__btns-down vote__btn' onClick={triggerBounceDown}>
          {memData[currentIndex].downvotes}
          <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className={`${bounceDown ? 'bounce' : ''} icon-margin`} />
        </button>
      </div>
    </div>
  );
}

export default MemCard;
