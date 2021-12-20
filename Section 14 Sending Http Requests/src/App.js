import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

let movieList = [];

function App() {
  const addMovieHandler = (movie) => {
    console.log(movie);
  }

  const [fetchingMovie, setFetchingMovie] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMovieHandler = () => {
    setFetchingMovie(true);
  };

  const fetchMovieAPI = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      movieList = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setFetchingMovie(false);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (fetchingMovie === true) {
      fetchMovieAPI();
    }
  }, [fetchingMovie, fetchMovieAPI]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (movieList.length > 0) {
    content = <MoviesList movies={movieList} />;
  } else {
    content = <p>Found no content.</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
