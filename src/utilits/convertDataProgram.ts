import { IProgram, IFullProgram } from "../types/program";

export const convertDataProgram = (
  listOfPrograms: IFullProgram[]
): IProgram[] =>
  listOfPrograms.map((program) => ({
    id: program.id,
    name: program.name,
    season: program.season,
    year: program.airdate.season?.slice(0, 4),
    image: program.show.image.original,
  }));
