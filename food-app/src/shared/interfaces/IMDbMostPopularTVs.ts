export interface IMDbMostPopularTVs {
  items:        Item[];
  errorMessage: string;
}

export interface Item {
  id:              string;
  rank:            string;
  rankUpDown:      string;
  title:           string;
  fullTitle:       string;
  year:            string;
  image:           string;
  crew:            string;
  imDbRating:      string;
  imDbRatingCount: string;
}