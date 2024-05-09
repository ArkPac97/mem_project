// src/components/buttons/SlideButtons.jsx
import React from 'react';

const SlideButtons = ({ goToPrevMem, goToNextMem }) => (
  <div>
    <img className='mem__slide-left' src="./arrow_left.png" alt="Left arrow" onClick={goToPrevMem} />
    <img className='mem__slide-right' src="./arrow_right.png" alt="Right arrow" onClick={goToNextMem} />
  </div>
);

export default SlideButtons;
