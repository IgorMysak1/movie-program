import React from "react";
import "../style/movie.scss";
import { IMovie } from "../types/movies";

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
          <span className="movie__season">Сезон: {season}</span>
          <span className="movie__episods">Епізод: {episods}</span>
        </div>
      </div>
    </div>
  );
};
