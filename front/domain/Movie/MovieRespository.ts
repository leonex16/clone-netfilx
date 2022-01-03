import { Movie } from './Movie';
import { httpNativeAdapter as http } from '../../infrastructure/adapters/httpNativeAdapter';
import { imdbApiAdapter as apiBuilder } from '../../infrastructure/adapters/imdbApiAdapter';

import TitleMoviesMock from '../../__mocks__/TitleMoviesMock.json';
import TopMoviesMock from '../../__mocks__/TopMoviesMock.json';

import { IMovie, MovieId } from './IMovie';
import { ITitleMovie } from '../../infrastructure/interfaces/ITitleMovie';
import { ITopMovies, IItem } from '../../infrastructure/interfaces/ITopMovies';


const getMovie = async (id: MovieId): Promise<IMovie> => {
  const url = apiBuilder.apiEndpointUrl({ endpoint: 'title', id});
  const movie: ITitleMovie = await http.get<ITitleMovie>({ url });
  return new Movie(movie);
};

const getMovies = async (): Promise<IMovie[]> => {
  const url = apiBuilder.apiEndpointUrl({ endpoint: 'mostPopularMovies' });
  const movies = await http.get<ITopMovies>({ url });
  return movies.items.map((item: IItem) => new Movie(item));
};

const getMoviesMock = async (): Promise<IMovie[]> => {
  return TitleMoviesMock.map((item: any) => new Movie(item));
}

const getTopMoviesMock = async (): Promise<IMovie[]> => {
  return TopMoviesMock.items.map((item: any) => new Movie(item));
}
  
export const MovieRepository = {
  getMovie,
  getMovies,

  getMoviesMock,
  getTopMoviesMock
}
