import React, { useState, createContext } from "react";

const CloudStateContext = createContext();

function CloudStateProvider({ children }) {
  const [cloudMode, setCloudMode] = useState(() => {
    const state = localStorage.getItem("cloudMode");
    if (state !== null) {
      return state.match(/^false$/i) ? false : true;
    } else {
      localStorage.setItem("cloudMode", "true");
      return true;
    }
  });

  return (
    <CloudStateContext.Provider value={[cloudMode, setCloudMode]}>
      {children}
    </CloudStateContext.Provider>
  );
}

export { CloudStateContext, CloudStateProvider };
