import { MovieRepository } from "./MovieRespository";
import { IMovie, MovieId } from "./IMovie";

const getMovie = (id: MovieId): Promise<IMovie> => {
  return MovieRepository.getMovie(id);
};

const getMovies = () => {
  return MovieRepository.getMovies();
};

const getMoviesMock = (): Promise<IMovie[]> => {
  return MovieRepository.getMoviesMock();
};

const getTopMoviesMock = (): Promise<IMovie[]> => {
  return MovieRepository.getTopMoviesMock();
};

export const MovieService = {
  getMovie,
  getMovies,
  getMoviesMock,
  getTopMoviesMock
};