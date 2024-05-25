import React, { useContext, useState } from 'react';
import MemsContext from '../store/MemsContext';
import SingleMeme from './SingleMeme';

function HotMemsBoard() {
  const { mems } = useContext(MemsContext);
  const [clickedMem, setClickedMem] = useState(null);

  const handleClick = (mem) => {
    setClickedMem(clickedMem === mem ? null : mem);
  };

  return (
    <section className="hot__board">
      {mems.filter(mem => mem.upvotes - mem.downvotes > 5).map(mem => (
        <SingleMeme 
          key={mem.id}
          mem={mem}
          clickedMem={clickedMem}
          handleClick={handleClick}
          boardClass="hot"
        />
      ))}
    </section>
  );
}

export default HotMemsBoard;
