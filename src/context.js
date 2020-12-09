import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='cu-cu'>
      {children}
    </AppContext.Provider>
)
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
