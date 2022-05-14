import axios from "axios";
import { IProgram } from "../types/program";
import { convertDataProgram } from "../utilits/convertDataProgram";
export const getProgramMovies = async (date: string): Promise<IProgram[]> => {
  const response = await axios.get(
    `https://api.tvmaze.com/schedule?country=US&date=${date}`
  );
  return convertDataProgram(response.data);
};
