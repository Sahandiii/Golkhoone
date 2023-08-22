import React, { useState, createContext, useEffect, useMemo } from "react";

import { plantsRequest } from "./plants.service";

export const PlantsContext = createContext();

export const PlantsContextProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrievePlants = () => {
    setIsLoading(true);
    setTimeout(() => {
      plantsRequest()
        .then((results) => {
          setIsLoading(false);
          setPlants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrievePlants();
  }, []);

  return (
    <PlantsContext.Provider value={{ plants, isLoading, error }}>
      {children}
    </PlantsContext.Provider>
  );
};
