const API_KEY = "49e2c24419918f986c2b57d9703e2e85";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovie = async (year, genreIds) => {
  const genreFilter = genreIds.length
    ? `&with_genres=${genreIds.join(",")}`
    : "";
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100${genreFilter}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
  return data.results;
};

export const fetchGenre = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
  return data.genres;
};
