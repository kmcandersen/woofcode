import React, { createContext, useState } from 'react';

export const IdCounterContext = createContext();

export const IdCounterProvider = (props) => {
  const [idCounter, setIdCounter] = useState(0);

  return (
    <IdCounterContext.Provider value={{ idCounter, setIdCounter }}>
      {props.children}
    </IdCounterContext.Provider>
  );
};
