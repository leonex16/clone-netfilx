export const GetMovies = (movieRepository: MovieRepository) => {
  return async (): Promise<Movie[]> => {
    return movieRepository.getMovies();
  };
}