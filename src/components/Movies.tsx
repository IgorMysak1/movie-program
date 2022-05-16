import React, { useState, useEffect } from "react";
import {
  IMovie,
  Movie,
  getMovies,
  defaultNumberMovies,
  Loader,
  createDate,
} from "./index";
import "../style/movies.scss";

interface MoviesProps {
  date: Date;
}

export const Movies: React.FC<MoviesProps> = ({ date }) => {
  const [listOfMovies, setListOfMovies] = useState<IMovie[]>([]);
  const [showAllMovies, setShowAllMovies] = useState<boolean>(false);

  useEffect(() => {
    date &&
      (async () => {
        const response = await getMovies(createDate(date));
        setListOfMovies(response);
      })();
  }, []);

  const showMovies = () => {
    if (listOfMovies.length > defaultNumberMovies) {
      return listOfMovies.slice(
        0,
        showAllMovies ? listOfMovies.length : defaultNumberMovies
      );
    } else {
      return listOfMovies;
    }
  };

  return (
    <div className="movies">
      <h1 className="movies__title">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      {listOfMovies.length ? (
        showMovies().map((movie) => <Movie key={movie.id} {...movie} />)
      ) : (
        <Loader />
      )}
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
