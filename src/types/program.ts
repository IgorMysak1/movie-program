export interface IProgram {
  id: number;
  name: string;
  season: string;
  year: string;
  image: string;
}

export interface IFullProgram extends IProgram {
  airdate: IProgramAirdate;
  show: IProgramShow;
}

interface IProgramAirdate {
  season: string;
}

interface IProgramShow {
  image: IProgramShowImage;
}

interface IProgramShowImage {
  original: string;
}
