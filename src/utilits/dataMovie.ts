import { IMovie, IFullMovie } from "../types/movies";

export const convertDataMovie = (listOfMovies: IFullMovie[]): IMovie[] =>
  listOfMovies.map((movie) => ({
    id: movie.id,
    name: movie?.name,
    season: movie?.season,
    year: movie?.show?.premiered?.slice(0, 4),
    image: movie?.show?.image?.original,
    episods: movie?.number,
  }));
export const createDate = (date: Date): string => {
  return `${date.getFullYear()}-${String(date.getMonth()).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};
