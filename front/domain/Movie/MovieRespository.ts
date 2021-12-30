import { IMovie } from "./IMovie";

export class MovieRepository {
  static getMovies(): any[] {
    return [
      {
        id: 'tt0111161',
        title: 'The Shawshank Redemption',
        originalTitle: 'The Shawshank Redemption',
        fullTitle: 'The Shawshank Redemption',
        type: 'movie',
        year: '1994',
        image: 'https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        releaseDate: new Date('1994-10-14'),
        runtimeMins: '142',
        runtimeStr: '2h 22min',
        plot: 'Two imprisoned'
      },];
  }
}