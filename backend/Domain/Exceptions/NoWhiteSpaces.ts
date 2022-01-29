export class NoWhiteSpaces extends Error {
  constructor( message: string = 'White spaces are not allowed' ) {
    super( message );
    this.name = 'NoWhiteSpaces';
  }
}
