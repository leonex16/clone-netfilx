import { MovieId } from '@Domain/ValueObjects/MovieId';
import { MovieImage } from '@Domain/ValueObjects/MovieImage';
import { MovieKeyword } from '@Domain/ValueObjects/MovieId copy';
import { MoviePlot } from '@Domain/ValueObjects/MoviePlot';
import { MovieRating } from '@Domain/ValueObjects/MovieRating';
import { MovieRuntime } from '@Domain/ValueObjects/MovieRuntime';
import { MovieTitle } from '@Domain/ValueObjects/MovieTitle';
import { MovieYear } from '@Domain/ValueObjects/MovieYear';

type MovieContructor = {
  id: MovieId;
  fullTitle: MovieTitle;
  year: MovieYear;
  image: MovieImage;
  runtimeStr: MovieRuntime;
  plot: MoviePlot;
  imDbRating: MovieRating;
  keywordList: MovieKeyword[];
};

export class Movie {
  public id: MovieId;
  private _fullTitle: MovieTitle;
  private _year: MovieYear;
  private _image: MovieImage;
  private _runtimeStr: MovieRuntime;
  private _plot: MoviePlot;
  // private fullCast: string; FullCast
  // genreList: GenreList[]
  // countryList: CountryList[]
  // languageList: LanguageList[]
  private _imDbRating: MovieRating;
  // ratings: Ratings
  // posters: Posters
  // images: Images
  // trailer: Trailer
  private _keywordList: MovieKeyword[];
  // similars: Similar[]

  constructor( Movie: MovieContructor ) {
    this.id = Movie.id;
    this._fullTitle = Movie.fullTitle;
    this._year = Movie.year;
    this._image = Movie.image;
    this._runtimeStr = Movie.runtimeStr;
    this._plot = Movie.plot;
    this._imDbRating = Movie.imDbRating;
    this._keywordList = Movie.keywordList;
  }
}
