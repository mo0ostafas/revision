import { useEffect, useState } from "react";
import { getTrendingMovies } from "../lib/appwrite.js";
import Spinner from "./Spinner";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadTrendingMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const trendingMovies = await getTrendingMovies();
      
      setMovies(trendingMovies);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching trending movies.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <section className="trending">
      <h2>Trending Movies</h2>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errmsg}</p>
      ) : movies.length === 0 ? (
        <p className="text-red-500">No trending movies yet</p>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={movie.$id}>
              <p>{index + 1}</p>
              <img src={movie.poster_url} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TrendingMovies;
