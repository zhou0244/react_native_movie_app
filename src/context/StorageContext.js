import { createContext, useState, useEffect, useContext } from "react";
import { useData } from "./SearchContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext();

function MovieProvider({ children }) {
  const [rentedMovies, setRentedMovies] = useState([]);
  const { listedMovies, setListedMovies } = useData();

  useEffect(() => {}, []);

  const saveRentedMovies = (movieId) => {
    if (rentedMovies.length > 0) {
      const isRented = rentedMovies.some((item) => item.id === movieId);
      if (isRented) {
        console.log("It is already rented");
        return;
      }
    }

    const matchedMovie = listedMovies.find((item) => item.id === movieId);
    console.log(`${matchedMovie.title} rented successfully!`);
    setRentedMovies((rentedMovies) => [...rentedMovies, matchedMovie]);
    saveToStorage(rentedMovies);

    // remove it from the listed movies
    const remainedListedMovies = listedMovies.filter(
      (item) => item.id !== movieId
    );
    setListedMovies(remainedListedMovies);
    console.log("Remaining listed movies:", remainedListedMovies.length);
  };

  const saveToStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("rented", jsonValue);
      console.log("Rented movies saved to storage.");
    } catch (err) {
      console.log("Failed to save to storage.", err);
    }
  };

  const removeRented = (movieId) => {
    const idToRemove = Number(movieId);
    const remainedRentedMovies = rentedMovies.filter(
      (item) => item.id !== idToRemove
    );
    setRentedMovies(remainedRentedMovies);
    saveToStorage(rentedMovies);
    console.log("remainedRentedMovies", remainedRentedMovies);
  };

  return (
    <DataContext.Provider
      value={{ rentedMovies, setRentedMovies, saveRentedMovies, removeRented }}
    >
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
