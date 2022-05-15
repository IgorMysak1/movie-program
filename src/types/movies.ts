export interface IMovie {
  id: number;
  name: string;
  season: number;
  year: string;
  image: string;
  episods: number;
}

export interface IFullMovie extends IMovie {
  show: IMovieShow;
  number: number;
}

interface IMovieShow {
  image: IMovieShowImage;
  premiered: string;
}

interface IMovieShowImage {
  original: string;
}
