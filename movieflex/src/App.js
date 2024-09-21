import "./App.css";
import GenreList from "./components/genrelist/GenreList";
import { fetchGenre, fetchMovie } from "./components/apicalls/ApiService";
import { useState } from "react";

function App() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenre] = useState([]);
  const [currentYear, setCurrentYear] = useState(2012);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <GenreList />
    </div>
  );
}

export default App;
