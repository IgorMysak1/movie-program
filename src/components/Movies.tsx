import React, { useState, useEffect } from "react";
import { IMovie, Movie, getMovies } from "./index";
import "../style/movies.scss";

interface MoviesProps {
  date: Date;
}

export const Movies: React.FC<MoviesProps> = ({ date }) => {
  const [listOfMovies, setListOfMovies] = useState<IMovie[]>(
    new Array(3).fill(0).map((_, index) => ({
      id: index,
      name: "loading...",
      season: 1,
      year: String(new Date().getFullYear()),
      image: "img/loader.gif",
      episods: 10,
    }))
  );
  console.log(listOfMovies);

  const [showAllMovies, setShowAllMovies] = useState<boolean>(false);
  useEffect(() => {
    date &&
      (async () => {
        const response = await getMovies(date.toISOString().slice(0, 10));
        setListOfMovies(response);
      })();
  }, []);
  const numberOfMovies = 3;
  return (
    <div className="movies">
      <h1 className="movies__title">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      {(listOfMovies.length > numberOfMovies
        ? listOfMovies.slice(
            0,
            showAllMovies ? listOfMovies.length : numberOfMovies
          )
        : listOfMovies
      ).map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      {!showAllMovies && listOfMovies.length > numberOfMovies && (
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
