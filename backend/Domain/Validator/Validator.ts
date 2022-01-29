import { ExceptionsDomain } from '@Domain/Exceptions';
import { Result, Rules } from '@Domain/Validator/Rules';


export class Validator {
  public static validate<T>( value: T, rules: Rules[] ) {
    const validators = {
      NO_WHITESPACE: Validator.noWhiteSpace,
      NO_EMPTY: Validator.noEmpty,
      NO_SPECIAL_CHARACTERS: Validator.noSpecialCharacters,
    };

    rules.forEach( rule => {
      const validator = validators[rule];

      if ( validator === undefined ) {
        throw new Error( `${rule} is not a valid rule` );
      };
    } );

    return value;
  }

  private static noWhiteSpace( value: string ): Result<string> {
    const hasWhiteSpaces = value.match( /\s/g );

    if ( hasWhiteSpaces ) return new ExceptionsDomain.NoWhiteSpaces();

    return value;
  }

  private static noEmpty( value: string ): Result<string> {
    if ( value.length === 0 ) return new ExceptionsDomain.NoEmpty();

    return value;
  }

  private static noSpecialCharacters( value: string ): Result<string> {
    const hasSpecialCharacters = value.match( /[^0-z]/g );

    if ( hasSpecialCharacters ) return new ExceptionsDomain.NoSpecialCharacters();

    return value;
  }
}
