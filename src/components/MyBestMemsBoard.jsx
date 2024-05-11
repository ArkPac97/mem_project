import React, { useContext, useState } from 'react';
import MemsContext from '../store/MemsContext';

function MyBestMemsBoard() {
  const { mems } = useContext(MemsContext);
  const [clickedMem, setClickedMem] = useState(null);

  const favorites = mems.filter(mem => mem.favorite);

  const handleClick = (mem) => {
      setClickedMem(clickedMem === mem ? null : mem);
  };

  return (
      <section className="mybest__board">
          {favorites.map(mem => (
              <div 
                  key={mem.id} 
                  className={`mybest__mem ${clickedMem === mem ? 'clicked' : ''}`}
                  onClick={() => handleClick(mem)}
              >
                  <img src={mem.img} alt={mem.title} className={`mybest__mem-img ${clickedMem === mem ? 'clicked-img' : ''}`} />
              </div>
          ))}
      </section>
  );
}

export default MyBestMemsBoard;
