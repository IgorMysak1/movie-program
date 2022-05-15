import React from "react";
import { IMovie } from "./index";
import "../style/movie.scss";

export const Movie: React.FC<IMovie> = ({
  name,
  season,
  year,
  image,
  episods,
}) => {
  return (
    <div className="movie">
      <div className="movie__logo">
        <img src={image} alt="Logo" />
      </div>
      <div className="movie__content">
        <div className="movie__title">{name}</div>
        <div className="movie__yaer">{year}</div>
        <div className="movie__parts">
          <span className="movie__season">Season: {season}</span>
          <span className="movie__episods">Episod: {episods}</span>
        </div>
      </div>
    </div>
  );
};
