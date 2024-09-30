import "./App.css";
import GenreList from "./components/genrelist/GenreList";
import MovieList from "./components/movielist/MovieList";
import { fetchGenre, fetchMovie } from "./components/apicalls/ApiService";
import { useEffect, useState } from "react";

function App() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentYear, setCurrentYear] = useState(2012);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      const genreData = await fetchGenre();
      setGenres(genreData);
    };

    loadGenres();
    loadMovies(currentYear, selectedGenres);
  }, [currentYear, selectedGenres]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !loading
      ) {
        setLoading(true);
        loadMovies(currentYear + 1, selectedGenres);
        setCurrentYear((prevYear) => prevYear + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, currentYear, selectedGenres]);

  const loadMovies = async (year, genres) => {
    try {
      const moviesData = await fetchMovie(year, genres);
      setMovies((prevMovies) => [...prevMovies, ...moviesData]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <GenreList genres={genres} onSelect={setSelectedGenres} />
      <MovieList movies={movies} genres={genres} />
      {loading && <p>Loading more movies...</p>}
    </div>
  );
}

export default App;
