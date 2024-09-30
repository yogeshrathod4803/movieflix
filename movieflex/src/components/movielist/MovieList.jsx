import React, { useState, useEffect } from "react";
import MovieCard from "../moviecard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, genres }) => {
  const [yearsToShow, setYearsToShow] = useState(1);
  const [groupedMovies, setGroupedMovies] = useState({});

  useEffect(() => {
    const grouped = movies.reduce((acc, movie) => {
      const year = movie.release_date.split("-")[0];
      if (!acc[year]) acc[year] = [];
      acc[year].push(movie);
      return acc;
    }, {});

    setGroupedMovies(grouped);
  }, [movies]);

  const loadMoreYears = () => {
    setYearsToShow((prev) => prev + 1);
  };

  const sortedYears = Object.keys(groupedMovies).sort((a, b) => a - b);

  return (
    <div className="movielist">
      {sortedYears.slice(0, yearsToShow).map((year) => (
        <div key={year} className="year-section">
          <h2>{year}</h2>
          <div className="movies-grid">
            {groupedMovies[year].slice(0, 20).map((movie) => (
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}
          </div>
        </div>
      ))}
      {yearsToShow < sortedYears.length && (
        <button onClick={loadMoreYears} className="load-more-button">
          Load More Years
        </button>
      )}
    </div>
  );
};

export default MovieList;
