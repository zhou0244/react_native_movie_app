import { createContext, useState, useEffect, useContext } from "react";
import { useData } from "./SearchContext";

const DataContext = createContext();

function MovieProvider({ children }) {
  const [rentedMovies, setRentedMovies] = useState([]);
  const { listedMovies, setListedMovies } = useData();

  useEffect(() => {}, []);

  const getMovie = (id) => {};

  return (
    <DataContext.Provider value={{ rentedMovies, setRentedMovies }}>
      {children}
    </DataContext.Provider>
  );
}

function useMovie() {
  const context = useContext(DataContext);
  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useMovie, MovieProvider };
