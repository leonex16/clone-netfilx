export class NoEmpty extends Error {
  constructor( message: string = 'Empty value are not allowed' ) {
    super( message );
    this.name = 'NoWhiteSpaces';
  }
}
