import {
  CountryListElement, Images, IMovie, Similar, Trailer,
} from './IMovie';

export class Movie implements IMovie {
  private _id: string;

  public title: string;

  public originalTitle: string;

  public fullTitle: string;

  public type: string;

  public year: string;

  public image: string;

  public releaseDate: Date;

  public runtimeMins: string;

  public runtimeStr: string;

  public plot: string;

  public plotLocal: string;

  public plotLocalIsRtl: boolean;

  public awards: string;

  public directors: string;

  public writers: string;

  public stars: string;

  public genres: string;

  public genreList: CountryListElement[];

  public companies: string;

  public countries: string;

  public countryList: CountryListElement[];

  public languages: string;

  public languageList: CountryListElement[];

  public contentRating: string;

  public imDbRating: string;

  public imDbRatingVotes: string;

  public metacriticRating: string;

  public posters: Images;

  public images: Images;

  public trailer: Trailer;

  public tagline: string;

  public keywords: string;

  public keywordList: string[];

  public similars: Similar[];

  public errorMessage: string;

  constructor(movie: IMovie) {
    this._id = movie.id; // TODO: Implement UUID and use it instead of id
    this.title = movie.title;
    this.originalTitle = movie.originalTitle;
    this.fullTitle = movie.fullTitle;
    this.type = movie.type;
    this.year = movie.year;
    this.image = movie.image;
    this.releaseDate = movie.releaseDate;
    this.runtimeMins = movie.runtimeMins;
    this.runtimeStr = movie.runtimeStr;
    this.plot = movie.plot;
    this.plotLocal = movie.plotLocal;
    this.plotLocalIsRtl = movie.plotLocalIsRtl;
    this.awards = movie.awards;
    this.directors = movie.directors;
    this.writers = movie.writers;
    this.stars = movie.stars;
    this.genres = movie.genres;
    this.genreList = movie.genreList;
    this.companies = movie.companies;
    this.countries = movie.countries;
    this.countryList = movie.countryList;
    this.languages = movie.languages;
    this.languageList = movie.languageList;
    this.contentRating = movie.contentRating;
    this.imDbRating = movie.imDbRating;
    this.imDbRatingVotes = movie.imDbRatingVotes;
    this.metacriticRating = movie.metacriticRating;
    this.posters = movie.posters;
    this.images = movie.images;
    this.trailer = movie.trailer;
    this.tagline = movie.tagline;
    this.keywords = movie.keywords;
    this.keywordList = movie.keywordList;
    this.similars = movie.similars;
    this.errorMessage = movie.errorMessage;
  }

  get id(): string {
    return this.id;
  }
}
