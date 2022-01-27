import { ActorList } from "../ActorList/ActorList";
import { BoxOffice } from "../BoxOffice/BoxOffice";
import { CompanyList } from "../CompanyList/CompanyList";
import { CountryList } from "../CountryList/CountryList";
import { DirectorList } from "../DirectorList/DirectorList";
import { FullCast } from "../FullCast/FullCast";
import { GenreList } from "../GenreList/GenreList";
import { Images } from "../Images/Images";
import { LanguageList } from "../LanguageList/LanguageList";
import { Posters } from "../Posters/Posters";
import { Ratings } from "../Ratings/Ratings";
import { Similar } from "../Similar/Similar";
import { StarList } from "../StarList/StarList";
import { Trailer } from "../Trailer/Trailer";
import { WriterList } from "../WriterList/WriterList";

export interface Movie {
  id: string
  title: string
  originalTitle: string
  fullTitle: string
  type: string
  year: string
  image: string
  releaseDate: string
  runtimeMins: string
  runtimeStr: string
  plot: string
  plotLocal: string
  plotLocalIsRtl: boolean
  awards: string
  directors: string
  directorList: DirectorList[]
  writers: string
  writerList: WriterList[]
  stars: string
  starList: StarList[]
  actorList: ActorList[]
  fullCast: FullCast
  genres: string
  genreList: GenreList[]
  companies: string
  companyList: CompanyList[]
  countries: string
  countryList: CountryList[]
  languages: string
  languageList: LanguageList[]
  contentRating: string
  imDbRating: string
  imDbRatingVotes: string
  metacriticRating: string
  ratings: Ratings
  wikipedia: any
  posters: Posters
  images: Images
  trailer: Trailer
  boxOffice: BoxOffice
  tagline: string
  keywords: string
  keywordList: string[]
  similars: Similar[]
  tvSeriesInfo: any
  tvEpisodeInfo: any
  errorMessage: any
}
