export class NoSpecialCharacters extends Error {
  constructor( message: string = 'Special characters are not allowed' ) {
    super( message );
    this.name = 'NoSpecialCharacters';
  }
}
