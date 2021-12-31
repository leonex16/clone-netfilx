export interface IItem {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface ITopMovies {
  items: IItem[];
  errorMessage: string;
}
