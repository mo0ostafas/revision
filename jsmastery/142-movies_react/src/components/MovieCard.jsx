const MovieCard = ({
  movie: { poster_path, title, vote_average, original_language, release_date },
}) => (
  <div className="movie-card">
    <img
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : "/no-movie.png"
      }
      alt={title}
    />

    <div className="mt-4">
      <h3>{title}</h3>

      <div className="content">
        <div className="rating">
          <img src="/star.svg" alt={`rating for ${title}`} />
          <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
        </div>

        <span>•</span>
        <span>{original_language ? original_language : "En"}</span>

        <span>•</span>
        <span>{release_date ? release_date.split("-")[0] : "N/A"}</span>
      </div>
    </div>
  </div>
);

export default MovieCard;
