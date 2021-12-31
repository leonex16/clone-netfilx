// eslint-disable-next-line no-shadow
export enum Language {
  // eslint-disable-next-line no-unused-vars
  En = 'en',
}

export interface Actor {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface BoxOffice {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
}

export interface CompanyListElement {
  id: string;
  name: string;
}

export interface CountryListElement {
  key: string;
  value: string;
}

export interface DirectorsItem {
  id: string;
  name: string;
  description: string;
}

export interface Directors {
  job: string;
  items: DirectorsItem[];
}

export interface FullCast {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  directors: Directors;
  writers: Directors;
  actors: Actor[];
  others: Directors[];
  errorMessage: string;
}

export interface ImagesItem {
  title: string;
  image: string;
}

export interface Backdrop {
  id: string;
  link: string;
  aspectRatio: number;
  language: Language;
  width: number;
  height: number;
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

export interface Ratings {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  imDb: string;
  metacritic: string;
  theMovieDb: string;
  rottenTomatoes: string;
  tV_com: string;
  filmAffinity: string;
  errorMessage: string;
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
  videoId: null;
  videoTitle: null;
  videoDescription: null;
  thumbnailUrl: null;
  uploadDate: null;
  link: null;
  linkEmbed: null;
  errorMessage: string;
}

export interface ITitleMovie {
  id: string;
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
  directorList: CompanyListElement[];
  writers: string;
  writerList: CompanyListElement[];
  stars: string;
  starList: CompanyListElement[];
  actorList: Actor[];
  fullCast: FullCast;
  genres: string;
  genreList: CountryListElement[];
  companies: string;
  companyList: CompanyListElement[];
  countries: string;
  countryList: CountryListElement[];
  languages: string;
  languageList: CountryListElement[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings: Ratings;
  wikipedia: null;
  posters: Images;
  images: Images;
  trailer: Trailer;
  boxOffice: BoxOffice;
  tagline: string;
  keywords: string;
  keywordList: string[];
  similars: Similar[];
  tvSeriesInfo: null;
  tvEpisodeInfo: null;
  errorMessage: string;
}
