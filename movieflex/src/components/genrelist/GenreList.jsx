import React from "react";
import "../genrelist/GenreList.css";

const GenreList = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>MOVIEFIX</h2>
      </div>
      <div className="genre">
        <button className="genre-btn">ALL</button>
        <button className="genre-btn">Action</button>
        <button className="genre-btn">Comedy</button>
        <button className="genre-btn">Horror</button>
        <button className="genre-btn">Drama</button>
        <button className="genre-btn">Sci-Fic</button>
        <button className="genre-btn">family</button>
      </div>
    </div>
  );
};

export default GenreList;
