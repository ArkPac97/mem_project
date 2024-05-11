import React, { useContext, useState } from 'react';
import MemsContext from '../store/MemsContext';

function HotMemsBoard() {
  const { mems } = useContext(MemsContext);
  const [clickedMem, setClickedMem] = useState(null);

  const handleClick = (mem) => {
    setClickedMem(clickedMem === mem ? null : mem);
  };

  return (
    <section className="hot__board">
      {mems.filter(mem => mem.upvotes - mem.downvotes > 5).map(mem => (
        <div key={mem.id}
             onClick={() => handleClick(mem)}
             className={`hot__mem ${clickedMem === mem ? 'clicked' : ''}`}>
          <img src={mem.img} alt={mem.title} className={`hot__mem-img ${clickedMem === mem ? 'clicked-img' : ''}`} />
        </div>
      ))}
    </section>
  );
}

export default HotMemsBoard;
