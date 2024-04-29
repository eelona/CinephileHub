const Movies = ({
  key,
  bg,
  title,
  year,
  duration,
  genre,
  rating,
  description,
  link,
}) => {
  return (
    <div className="movie-item">
      <div className="movie-image">
        <img src={bg} alt="" />
      </div>
      <div className="movie-details">
        <h2>{title}</h2>
        <div className="sub-details">
          <span>{year}</span>
          <span>{duration}</span>
          <span>{genre}</span>
        </div>
        <div className="ratings">
          <span>{"★".repeat(rating)}</span>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="movie-button">
          <a href={link} target="_blank">
            <div className="button">
            <button>Watch Trailer</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movies;
