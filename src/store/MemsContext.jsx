import React, { createContext, useState } from 'react';
import memsData from '../data/mems.json';

const MemsContext = createContext();

export const MemsProvider = ({ elements }) => {
  const [mems, setMems] = useState(memsData.map((mem, index) => ({
    ...mem,
    id: mem.id || `mem-${index}`,
    upvotes: 0,
    downvotes: 0,
    favorite: 0
  })));

  const vote = (id, type) => {
    const updatedMems = mems.map(mem => {
      if (mem.id === id) {
        if (type === 'up') {
          return { ...mem, upvotes: mem.upvotes + 1 };
        } else {
          return { ...mem, downvotes: mem.downvotes + 1 };
        }
      }
      return mem;
    });
    setMems(updatedMems);
  };

  const toggleFavorite = (id) => {
    const updatedMems = mems.map(mem => {
      if (mem.id === id) {
        return { ...mem, favorite: mem.favorite ? 0 : 1 };
      }
      return mem;
    });
    setMems(updatedMems);
  };

  return (
    <MemsContext.Provider value={{ mems, vote, toggleFavorite }}>
      {elements}
    </MemsContext.Provider>
  );
};

export default MemsContext;
