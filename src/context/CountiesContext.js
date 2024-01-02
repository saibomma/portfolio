import React, { createContext, useContext, useState, useEffect } from "react";

const CountiesContext = createContext();

export const useCounties = () => {
  return useContext(CountiesContext);
};

export const CountiesProvider = ({ children }) => {
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    fetch("/api/counties")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCounties(data);
      })
      .catch((error) => {
        console.error("Error fetching Counties:", error);
      });
  }, []);

  return (
    <CountiesContext.Provider value={counties}>
      {children}
    </CountiesContext.Provider>
  );
};