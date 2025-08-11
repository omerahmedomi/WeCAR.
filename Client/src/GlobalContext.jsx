/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <GlobalContext.Provider value={{ data,setData }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
