import React, { useState, useEffect } from "react";
import {
  IMovie,
  Movie,
  getMovies,
  moviesPreloader,
  defaultNumberMovies,
} from "./index";
import "../style/movies.scss";

interface MoviesProps {
  date: Date;
}

export const Movies: React.FC<MoviesProps> = ({ date }) => {
  const [listOfMovies, setListOfMovies] = useState<IMovie[]>(moviesPreloader());

  const [showAllMovies, setShowAllMovies] = useState<boolean>(false);
  useEffect(() => {
    date &&
      (async () => {
        const response = await getMovies(date.toISOString().slice(0, 10));
        setListOfMovies(response);
      })();
  }, []);

  return (
    <div className="movies">
      <h1 className="movies__title">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      {(listOfMovies.length > defaultNumberMovies
        ? listOfMovies.slice(
            0,
            showAllMovies ? listOfMovies.length : defaultNumberMovies
          )
        : listOfMovies
      ).map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      {!showAllMovies && listOfMovies.length > defaultNumberMovies && (
        <button
          className="movies__showMore"
          onClick={() => setShowAllMovies(true)}
        >
          {`Show other ${listOfMovies.length - 3}`}
          <img src="img/arrowSlide.svg" alt="Arrow" />
        </button>
      )}
    </div>
  );
};
