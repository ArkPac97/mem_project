import React, { useEffect, useState } from 'react';
import memsData from '../data/mems.json';

function RegularMemsBoard() {
  const [regularMems, setRegularMems] = useState([]);
  const [clickedMem, setClickedMem] = useState(null);

  useEffect(() => {
      const filteredMems = memsData.filter(mem => {
          const balance = mem.upvotes - mem.downvotes;
          return balance <= 5;
      });
      setRegularMems(filteredMems);
  }, []);

  const handleClick = (mem) => {
      if (clickedMem === mem) {
          setClickedMem(null);
      } else {
          setClickedMem(mem);
      }
  };

    return (
        <section className="regular__board">
            {regularMems.map(mem => (
                <div 
                    key={mem.img} 
                    className={`regular__mem ${clickedMem === mem ? 'clicked' : ''}`}
                    onClick={() => handleClick(mem)}
                >
                    <img 
                        className={`regular__mem-img ${clickedMem === mem ? 'clicked-img' : ''}`} 
                        src={mem.img} 
                        alt={mem.title} 
                    />
                </div>
            ))}
        </section>
    );
}

export default RegularMemsBoard;
