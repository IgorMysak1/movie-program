export interface IMovie {
  id: number;
  name: string;
  season: string;
  year: string;
  image: string;
}

export interface IFullMovie extends IMovie {
  airdate: IMovieAirdate;
  show: IMovieShow;
}

interface IMovieAirdate {
  season: string;
}

interface IMovieShow {
  image: IMovieShowImage;
}

interface IMovieShowImage {
  original: string;
}
