export type OptsTitle = 'FullActor' | 'FullCast' | 'Posters' | 'Images' | 'Trailer' | 'Ratings' | 'Wikipedia';

export interface IMDBTitle {
  id:               string;
  title:            string;
  originalTitle:    string;
  fullTitle:        string;
  type:             string;
  year:             string;
  image:            string;
  releaseDate:      Date;
  runtimeMins:      string;
  runtimeStr:       string;
  plot:             string;
  plotLocal:        string;
  plotLocalIsRtl:   boolean;
  awards:           string;
  directors:        string;
  directorList:     CompanyListElement[];
  writers:          string;
  writerList:       CompanyListElement[];
  stars:            string;
  starList:         CompanyListElement[];
  actorList:        Actor[];
  fullCast:         FullCast;
  genres:           string;
  genreList:        CountryListElement[];
  companies:        string;
  companyList:      CompanyListElement[];
  countries:        string;
  countryList:      CountryListElement[];
  languages:        string;
  languageList:     CountryListElement[];
  contentRating:    string;
  imDbRating:       string;
  imDbRatingVotes:  string;
  metacriticRating: string;
  ratings:          Ratings;
  wikipedia:        Wikipedia;
  posters:          Images;
  images:           Images;
  trailer:          Trailer;
  boxOffice:        BoxOffice;
  tagline:          string;
  keywords:         string;
  keywordList:      string[];
  similars:         Similar[];
  tvSeriesInfo:     null;
  tvEpisodeInfo:    null;
  errorMessage:     string;
}

export interface Actor {
  id:          string;
  image:       string;
  name:        string;
  asCharacter: string;
}

export interface BoxOffice {
  budget:                   string;
  openingWeekendUSA:        string;
  grossUSA:                 string;
  cumulativeWorldwideGross: string;
}

export interface CompanyListElement {
  id:   string;
  name: string;
}

export interface CountryListElement {
  key:   string;
  value: string;
}

export interface FullCast {
  imDbId:       string;
  title:        string;
  fullTitle:    string;
  type:         string;
  year:         string;
  directors:    Directors;
  writers:      Directors;
  actors:       Actor[];
  others:       Directors[];
  errorMessage: string;
}

export interface Directors {
  job:   string;
  items: DirectorsItem[];
}

export interface DirectorsItem {
  id:          string;
  name:        string;
  description: string;
}

export interface Images {
  imDbId:       string;
  title:        string;
  fullTitle:    string;
  type:         string;
  year:         string;
  items?:       ImagesItem[];
  errorMessage: string;
  posters?:     Backdrop[];
  backdrops?:   Backdrop[];
}

export interface Backdrop {
  id:          string;
  link:        string;
  aspectRatio: number;
  language:    Language;
  width:       number;
  height:      number;
}

export enum Language {
  En = "en",
}

export interface ImagesItem {
  title: string;
  image: string;
}

export interface Ratings {
  imDbId:         string;
  title:          string;
  fullTitle:      string;
  type:           string;
  year:           string;
  imDb:           string;
  metacritic:     string;
  theMovieDb:     string;
  rottenTomatoes: string;
  tV_com:         string;
  filmAffinity:   string;
  errorMessage:   string;
}

export interface Similar {
  id:         string;
  title:      string;
  fullTitle:  string;
  year:       string;
  image:      string;
  plot:       string;
  directors:  string;
  stars:      string;
  genres:     string;
  imDbRating: string;
}

export interface Trailer {
  imDbId:           string;
  title:            string;
  fullTitle:        string;
  type:             string;
  year:             string;
  videoId:          string;
  videoTitle:       string;
  videoDescription: string;
  thumbnailUrl:     string;
  uploadDate:       string;
  link:             string;
  linkEmbed:        string;
  errorMessage:     string;
}

export interface Wikipedia {
  imDbId:          string;
  title:           string;
  fullTitle:       string;
  type:            string;
  year:            string;
  language:        Language;
  titleInLanguage: string;
  url:             string;
  plotShort:       Plot;
  plotFull:        Plot;
  errorMessage:    string;
}

export interface Plot {
  plainText: string;
  html:      string;
}
