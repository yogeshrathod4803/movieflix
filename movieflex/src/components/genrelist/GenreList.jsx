import React from "react";
import "./GenreList.css";

const GenreList = ({ genres, onSelect }) => {
  const handleSelect = (genreId) => {
    onSelect((prev) => {
      const newSelected = prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId];
      return newSelected;
    });
  };

  return (
    <div className="header">
      <div className="logo">
        <h2>MOVIEFIX</h2>
      </div>
      <div className="genre">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="genre-btn"
            onClick={() => handleSelect(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
