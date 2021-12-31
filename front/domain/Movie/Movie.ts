import { generateUUID } from '../../infrastructure/uuid/uuid';
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

  constructor(movie: any) {
    const m = this.toMovie(movie);
    this._id = generateUUID(); // TODO: Implement UUID and use it instead of id
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

  get id(): string {
    return this.id;
  }

  // eslint-disable-next-line class-methods-use-this
  toMovie(data: any): IMovie {
    const m = typeof data === 'string' ? JSON.parse(data) : data;

    return {
      title: m.title,
      originalTitle: m.originalTitle,
      fullTitle: m.fullTitle,
      type: m.type,
      year: m.year,
      image: m.image,
      releaseDate: m.releaseDate,
      runtimeMins: m.runtimeMins,
      runtimeStr: m.runtimeStr,
      plot: m.plot,
      plotLocal: m.plotLocal,
      plotLocalIsRtl: m.plotLocalIsRtl,
      awards: m.awards,
      directors: m.directors,
      writers: m.writers,
      stars: m.stars,
      genres: m.genres,
      genreList: m.genreList,
      companies: m.companies,
      countries: m.countries,
      countryList: m.countryList,
      languages: m.languages,
      languageList: m.languageList,
      contentRating: m.contentRating,
      imDbRating: m.imDbRating,
      imDbRatingVotes: m.imDbRatingVotes,
      metacriticRating: m.metacriticRating,
      posters: m.posters,
      images: m.images,
      trailer: m.trailer,
      tagline: m.tagline,
      keywords: m.keywords,
      keywordList: m.keywordList,
      similars: m.similars,
      errorMessage: m.errorMessage,
    };
  }
}
