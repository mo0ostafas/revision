import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import { updateSearchCount } from "../lib/appwrite.js";
import Spinner from "./Spinner.jsx";
import MovieCard from "./MovieCard.jsx";

const AllMovies = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage("");

    const API_URL = "https://api.themoviedb.org/3/" + (
      query
        ? `/search/movie?query=${encodeURIComponent(query)}`
        : "discover/movie?sorted_by=popularity.desc"
    );

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
    };

    try {
      const res = await fetch(API_URL, options);

      if (!res.ok) {
        throw new Error("No movies found");
      }

      const data = await res.json();

      setMovies(data.results);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useDebounce(() => {
    setDebouncedQuery(searchTerm);
  }, 500, [searchTerm]);

  useEffect(() => {
    fetchMovies(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <section className="all-movies">
      <h2>All Movies</h2>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AllMovies;
