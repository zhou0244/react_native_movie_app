import { createContext, useState, useEffect, useContext } from "react";
import { API_KEY } from "@env";

// Create a context for storing movie data
const DataContext = createContext();

// DataProvider component which holds the logic for fetching movies and providing them through context
function DataProvider({ children }) {
  const [listedMovies, setListedMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // Only fetch data when there is a search keyword
    if (searchKeyword == "") {
      return;
    }
    fetchData();
  }, [searchKeyword]);

  // Function to fetch movies from TMDB API based on the search keyword
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=false&language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          console.log("Fetch failed.");
          throw new Error(`Response status: ${response.status}`);
        }
        return res.json();
      })
      .then((json) => {
        const newMovies = json.results;
        console.log(`Success! ${newMovies.length} movies fetched.`);
        setListedMovies(newMovies);
      })
      .catch((err) => console.error(err));
  };

  return (
    <DataContext.Provider
      value={{
        listedMovies,
        setListedMovies,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

// Provide the context value to the children components
function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useData, DataProvider };
