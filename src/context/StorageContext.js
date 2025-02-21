import { createContext, useState, useEffect, useContext } from "react";
import { useData } from "./SearchContext";

const DataContext = createContext();

function MovieProvider({ children }) {
  const [rentedMovies, setRentedMovies] = useState([]);
  const { listedMovies, setListedMovies } = useData();

  useEffect(() => {}, []);

  const saveRentedMovies = async (movieName) => {};

  const getMovie = async (storageKey) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.log(`Getting ${storageKey} movies failed`, err);
    }
  };

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

function useMovie() {
  const context = useContext(DataContext);
  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useMovie, MovieProvider };
