import React from "react";
import MovieCard from "../moviecard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, genres }) => {
  // console.log(movies.release_date);
  return (
    <div className="movielist">
      <h2>2012</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* <h2>{movie.release_date.split("-").slice(0, 1)}</h2> */}

          {movie.release_date.split("-").slice(0, 1) == "2012" ? (
            <div>
              <MovieCard movie={movie} genres={genres} />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
