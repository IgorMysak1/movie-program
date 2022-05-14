import { IMovie, IFullMovie } from "../types/movies";

export const convertDataMovie = (listOfMovies: IFullMovie[]): IMovie[] =>
  listOfMovies.map((movie) => ({
    id: movie.id,
    name: movie.name,
    season: movie.season,
    year: movie.airdate.season?.slice(0, 4),
    image: movie.show.image.original,
  }));
