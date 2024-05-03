import React, { useEffect, useState } from 'react';

function MyBestBoard() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      const loadedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(loadedFavorites);
  }, []);

  return (
      <section className="mybest__board">
          {favorites.map(mem => (
              <div key={mem.id} className="mybest__mem">
                  <img src={mem.img} alt={mem.title} />
              </div>
          ))}
      </section>
  );
}

export default MyBestBoard;
