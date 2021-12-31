import { IMovie } from './IMovie';
import { httpNativeAdapter as http } from '../../infrastructure/adapters/httpNativeAdapter';
import { ITitleMovie } from '../../infrastructure/interfaces/ITitleMovie';
import { ITopMovies, IItem } from '../../infrastructure/interfaces/ITopMovies';

import { TitleMovieMock } from '../../__mocks__/TitleMovieMock';
// import { TopMoviesMock } from '../../__mocks__/TopMoviesMock';
import { Movie } from './Movie';

const getMovies = (): IMovie => {
  return new Movie(TitleMovieMock)
};

export const MovieRepository = {
  getMovies,
}
