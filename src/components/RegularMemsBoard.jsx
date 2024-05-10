import React, { useEffect, useState } from 'react';
import memsData from '../data/mems.json';

function RegularMemsBoard() {
  const [regularMems, setRegularMems] = useState([]);

  useEffect(() => {
      const filteredMems = memsData.filter(mem => {
          const balance = mem.upvotes - mem.downvotes;
          return balance <= 5;
      });
      setRegularMems(filteredMems);
  }, []);

  return (
      <section className="regular__board">
          {regularMems.map(mem => (
              <div key={mem.img} className="regular__mem">
                  <img src={mem.img} alt={mem.title} />
              </div>
          ))}
      </section>
  );
}

export default RegularMemsBoard;
