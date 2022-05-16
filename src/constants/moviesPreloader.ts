import { IMovie } from "../components";
export const moviesPreloader = (): IMovie[] =>
  new Array(3).fill(0).map((_, index) => ({
    id: index,
    name: "loading...",
    season: 1,
    year: String(new Date().getFullYear()),
    image: "img/loader.gif",
    episods: 10,
  }));
export const defaultNumberMovies = 3;
