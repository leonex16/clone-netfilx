// eslint-disable-next-line no-shadow
export enum Language {
  // eslint-disable-next-line no-unused-vars
  En = 'en',
}

export type MovieId = string;

export interface CountryListElement {
  key: string;
  value: string;
}

export interface Backdrop {
  id: string;
  link: string;
  aspectRatio: number;
  language: Language;
  width: number;
  height: number;
}

export interface ImagesItem {
  title: string;
  image: string;
}

export interface Images {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  items?: ImagesItem[];
  errorMessage: string;
  posters?: Backdrop[];
  backdrops?: Backdrop[];
}

export interface Similar {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  plot: string;
  directors: string;
  stars: string;
  genres: string;
  imDbRating: string;
}

export interface Trailer {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  thumbnailUrl: string;
  uploadDate: string;
  link: string;
  linkEmbed: string;
  errorMessage: string;
}

export interface IMovie {
  id?: MovieId;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: Date;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  writers: string;
  stars: string;
  genres: string;
  genreList: CountryListElement[];
  companies: string;
  countries: string;
  countryList: CountryListElement[];
  languages: string;
  languageList: CountryListElement[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  posters: Images;
  images: Images;
  trailer: Trailer;
  tagline: string;
  keywords: string;
  keywordList: string[];
  similars: Similar[];
  errorMessage: string;
}
