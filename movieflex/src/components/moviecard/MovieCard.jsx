import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, genres }) => {
  const genreNames = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name)
    .join(", ");

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>
        <strong>Genres:</strong> {genreNames || "N/A"}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
    </div>
  );
};

export default MovieCard;
