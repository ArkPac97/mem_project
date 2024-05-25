import React, { useContext, useState } from 'react';
import MemsContext from '../store/MemsContext';
import SingleMeme from './SingleMeme';

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
            <SingleMeme 
              key={mem.id}
              mem={mem}
              clickedMem={clickedMem}
              handleClick={handleClick}
              boardClass="mybest"
            />
          ))}
      </section>
  );
}

export default MyBestMemsBoard;
