import React, { useContext, useState } from 'react';
import MemsContext from '../store/MemsContext';

function RegularMemsBoard() {
  const { mems } = useContext(MemsContext);
  const [clickedMem, setClickedMem] = useState(null);

  const handleClick = (mem) => {
    setClickedMem(clickedMem === mem ? null : mem);
  };

  return (
    <section className="regular__board">
      {mems.filter(mem => mem.upvotes - mem.downvotes <= 5).map(mem => (
        <div key={mem.id}
             onClick={() => handleClick(mem)}
             className={`regular__mem ${clickedMem === mem ? 'clicked' : ''}`}>
          <img src={mem.img} alt={mem.title} className={`regular__mem-img ${clickedMem === mem ? 'clicked-img' : ''}`} />
        </div>
      ))}
    </section>
  );
}

export default RegularMemsBoard;
