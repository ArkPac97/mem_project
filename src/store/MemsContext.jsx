import React, { createContext, useState } from 'react';
import memsData from '../data/mems.json'; 

const MemsContext = createContext({
  hot: [],
  setHot: () => {},
  regular: [],
  setRegular: () => {}
});

export const MemsProvider = ({ children }) => {
  const [hot, setHot] = useState([]);
  const [regular, setRegular] = useState(memsData);

  return (
    <MemsContext.Provider value={{ hot, setHot, regular, setRegular }}>
      {children}
    </MemsContext.Provider>
  );
};

export default MemsContext;
