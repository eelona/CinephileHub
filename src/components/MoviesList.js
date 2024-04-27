import Movies from "./Movies";
import "./movies.css";
import { dataSet } from "./movieData";
import { useState } from "react";
const MoviesList = () => {
  const [movies, setMovies] = useState([...dataSet]);
  return (
    <div className="movie-list">
      {movies.map(
        ({ bg, title, year, duration, genre, rating, description, link }) => {
          return (
            <Movies
              key={title}
              bg={bg}
              title={title}
              year={year}
              duration={duration}
              genre={genre}
              rating={rating}
              description={description}
              link={link}
            />
          );
        }
      )}
    </div>
  );
};
export default MoviesList;
