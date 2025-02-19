import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=matrix&include_adult=false&language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZkOGZjYzZiOGI1ODU3NTZiMzE5MWZiYTUwMzMzZCIsIm5iZiI6MTcxMDc5ODI4My43NzcsInN1YiI6IjY1ZjhiNWNiYWFmODk3MDE0ODJjZjUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.reksCWgvLF-iXkmw2C71iB2kTM905PHTvc9CV50TnPo",
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
        setMovies(newMovies);
        console.log("Movie saved:", movies[0]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <DataContext.Provider value={{ movies }}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataProvider };
