import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZkOGZjYzZiOGI1ODU3NTZiMzE5MWZiYTUwMzMzZCIsIm5iZiI6MTcxMDc5ODI4My43NzcsInN1YiI6IjY1ZjhiNWNiYWFmODk3MDE0ODJjZjUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.reksCWgvLF-iXkmw2C71iB2kTM905PHTvc9CV50TnPo";

function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetchMovie();
  }, [searchKeyword]);

  useEffect(() => {
    if (movies.length > 0) {
      console.log("Movie saved:", movies.length);
    }
  }, [movies]);

  const fetchMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api_token}`,
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return res.json();
      })
      .then((json) => {
        const newMovies = json.results;
        console.log("Fetch success!", newMovies[0]);
        setMovies(newMovies);
      })
      .catch((err) => console.error(err));
  };

  return (
    <DataContext.Provider
      value={{ movies, fetchMovie, searchKeyword, setSearchKeyword }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useData, DataProvider };
