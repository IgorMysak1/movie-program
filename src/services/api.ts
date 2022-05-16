import axios from "axios";
import { IMovie } from "../types/movies";
import { convertDataMovie } from "../utilits/convertDataMovie";
export const getMovies = async (date: string): Promise<IMovie[]> => {
  try {
    const response = await axios.get(
      `https://api.tvmaze.com/schedule?country=US&date=${date}`
    );
    return convertDataMovie(response.data);
  } catch (e) {
    alert(e);
    return [];
  }
};
