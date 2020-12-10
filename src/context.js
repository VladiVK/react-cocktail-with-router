import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// https://www.thecocktaildb.com/api.php
const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {

    setLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {

        const newDrinks = drinks.map((drink) => {

          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = drink;

          // we just create an understandable names:
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };

        });

        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      console.log('error');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
