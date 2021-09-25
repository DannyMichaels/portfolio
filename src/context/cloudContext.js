import React, { useState, createContext } from 'react';

const CloudStateContext = createContext();

// context that controls clouds, floatly hover animations and some shadows
function CloudStateProvider({ children }) {
  const [cloudMode, rawSetCloudMode] = useState(() => {
    const state = localStorage.getItem('cloudMode');
    if (state !== null) {
      return state.match(/^false$/i) ? false : true;
    } else {
      localStorage.setItem('cloudMode', 'true');
      return true;
    }
  });

  const setCloudMode = (value) => {
    rawSetCloudMode(value);

    localStorage.setItem('cloudMode', value);
  };

  return (
    <CloudStateContext.Provider value={[cloudMode, setCloudMode]}>
      {children}
    </CloudStateContext.Provider>
  );
}

export { CloudStateContext, CloudStateProvider };
