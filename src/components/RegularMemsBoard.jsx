import React, { useContext, useState } from 'react';
import MemsContext from '../store/MemsContext';
import SingleMeme from './SingleMeme';

function RegularMemsBoard() {
  const { mems } = useContext(MemsContext);
  const [clickedMem, setClickedMem] = useState(null);

  const handleClick = (mem) => {
    setClickedMem(clickedMem === mem ? null : mem);
  };

  return (
    <section className="regular__board">
      {mems.filter(mem => mem.upvotes - mem.downvotes <= 5).map(mem => (
        <SingleMeme 
          key={mem.id}
          mem={mem}
          clickedMem={clickedMem}
          handleClick={handleClick}
          boardClass="regular"
        />
      ))}
    </section>
  );
}

export default RegularMemsBoard;
