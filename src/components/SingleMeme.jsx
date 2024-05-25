import React from 'react';

function SingleMeme({ mem, clickedMem, handleClick, boardClass }) {
  return (
    <div 
      key={mem.id}
      onClick={() => handleClick(mem)}
      className={`${boardClass}__mem ${clickedMem === mem ? 'clicked' : ''}`}>
      <img 
        src={mem.img} 
        alt={mem.title} 
        className={`${boardClass}__mem-img ${clickedMem === mem ? 'clicked-img' : ''}`} 
      />
    </div>
  );
}

export default SingleMeme;
