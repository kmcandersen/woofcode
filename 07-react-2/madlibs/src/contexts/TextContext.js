import React, { useState } from 'react';

export const TextContext = React.createContext({
  text: '',
  setText: () => {},
});

export const Provider = ({ children }) => {
  const [text, setText] = useState('');
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
