import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiBase } from "./data";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get(apiBase + "/auth/me", {
          withCredentials: true,
        });

        setUser(res.data.user);
      } catch (error) {
        setUser(null); // not logged in
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);
  return (
    <GlobalContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
