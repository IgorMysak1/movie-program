import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../services/api";
import { createStringfDate } from "../utilits/date";
import { IMovie } from "../types/movies";
import { Movie } from "./Movie";
import "../style/movies.scss";

interface MoviesProps {
  date: Date;
}

export const Movies: React.FC<MoviesProps> = ({ date }) => {
  const [listOfMovies, setListOfMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    date &&
      (async () => {
        const response = await getMovies(createStringfDate(date));
        setListOfMovies(response);
      })();
  }, []);
  console.log(listOfMovies);

  return (
    <div className="movies">
      <h1 className="movies__title">
        {date.toLocaleDateString("ua", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      {listOfMovies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};
