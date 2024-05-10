import React, { useEffect, useState } from 'react';

function MyBestMemsBoard() {
  const [favorites, setFavorites] = useState([]);
  const [clickedMem, setClickedMem] = useState(null);

  useEffect(() => {
      const loadedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(loadedFavorites);
  }, []);

  const handleClick = (mem) => {
      if (clickedMem === mem) {
          setClickedMem(null);
      } else {
          setClickedMem(mem);
      }
  };

  return (
      <section className="mybest__board">
          {favorites.map(mem => (
              <div 
                  key={mem.id} 
                  className={`mybest__mem ${clickedMem === mem ? 'clicked' : ''}`}
                  onClick={() => handleClick(mem)}
              >
                  <img src={mem.img} alt={mem.title} />
              </div>
          ))}
      </section>
  );
}

export default MyBestMemsBoard;
