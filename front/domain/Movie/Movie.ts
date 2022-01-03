import { Entity } from '../Entity';
import {
  CountryListElement, Images, IMovie, MovieId, Similar, Trailer,
} from './IMovie';
export class Movie extends Entity implements IMovie  {

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

  constructor(movie: any) {
    super();
    const m = this.toMovie(movie);
    
    this.title = m.title;
    this.originalTitle = m.originalTitle;
    this.fullTitle = m.fullTitle;
    this.type = m.type;
    this.year = m.year;
    this.image = m.image;
    this.releaseDate = m.releaseDate;
    this.runtimeMins = m.runtimeMins;
    this.runtimeStr = m.runtimeStr;
    this.plot = m.plot;
    this.plotLocal = m.plotLocal;
    this.plotLocalIsRtl = m.plotLocalIsRtl;
    this.awards = m.awards;
    this.directors = m.directors;
    this.writers = m.writers;
    this.stars = m.stars;
    this.genres = m.genres;
    this.genreList = m.genreList;
    this.companies = m.companies;
    this.countries = m.countries;
    this.countryList = m.countryList;
    this.languages = m.languages;
    this.languageList = m.languageList;
    this.contentRating = m.contentRating;
    this.imDbRating = m.imDbRating;
    this.imDbRatingVotes = m.imDbRatingVotes;
    this.metacriticRating = m.metacriticRating;
    this.posters = m.posters;
    this.images = m.images;
    this.trailer = m.trailer;
    this.tagline = m.tagline;
    this.keywords = m.keywords;
    this.keywordList = m.keywordList;
    this.similars = m.similars;
    this.errorMessage = m.errorMessage;
  }

  get id(): MovieId {
    return this.id;
  }

  // eslint-disable-next-line class-methods-use-this
  toMovie(data: any): IMovie {
    const NO_INFORMATION = 'No Information';
    const m = typeof data === 'string' ? JSON.parse(data) : data;

    return {
      title: m.title ?? NO_INFORMATION, // REQUIRED
      originalTitle: m.originalTitle ?? NO_INFORMATION,
      fullTitle: m.fullTitle ?? NO_INFORMATION,
      type: m.type ?? NO_INFORMATION,
      year: m.year ?? NO_INFORMATION,
      image: m.image ?? NO_INFORMATION, // REQUIRED
      releaseDate: m.releaseDate ?? NO_INFORMATION,
      runtimeMins: m.runtimeMins ?? NO_INFORMATION,
      runtimeStr: m.runtimeStr ?? NO_INFORMATION, // REQUIRED
      plot: m.plot ?? NO_INFORMATION, // REQUIRED
      plotLocal: m.plotLocal ?? NO_INFORMATION,
      plotLocalIsRtl: m.plotLocalIsRtl ?? NO_INFORMATION,
      awards: m.awards ?? NO_INFORMATION,
      directors: m.directors ?? NO_INFORMATION,
      writers: m.writers ?? NO_INFORMATION,
      stars: m.stars ?? NO_INFORMATION,
      genres: m.genres ?? NO_INFORMATION,
      genreList: m.genreList ?? NO_INFORMATION,
      companies: m.companies ?? NO_INFORMATION,
      countries: m.countries ?? NO_INFORMATION,
      countryList: m.countryList ?? NO_INFORMATION,
      languages: m.languages ?? NO_INFORMATION,
      languageList: m.languageList ?? NO_INFORMATION,
      contentRating: m.contentRating ?? NO_INFORMATION,
      imDbRating: m.imDbRating ?? NO_INFORMATION, // REQUIRED
      imDbRatingVotes: m.imDbRatingVotes ?? NO_INFORMATION,
      metacriticRating: m.metacriticRating ?? NO_INFORMATION,
      posters: m.posters ?? NO_INFORMATION, // REQUIRED
      images: m.images ?? NO_INFORMATION,
      trailer: m.trailer ?? NO_INFORMATION,
      tagline: m.tagline ?? NO_INFORMATION,
      keywords: m.keywords ?? NO_INFORMATION,
      keywordList: m.keywordList ?? NO_INFORMATION,
      similars: m.similars ?? NO_INFORMATION,
      errorMessage: m.errorMessage ?? NO_INFORMATION,
    };
  }
}
