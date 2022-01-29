import { IValueObject } from './_IValueObject';

import { Rules } from '@Domain/Validator/Rules';
import { Validator } from '@Domain/Validator/Validator';


export class MovieRating extends IValueObject<string> {
  private constructor( value: string ) {
    super( value );
  }

  create( id: string ): string | never {
    const RULES: Rules[] = [
      'NO_WHITESPACE',
      'NO_EMPTY',
      'NO_SPECIAL_CHARACTERS',
    ];

    Validator.validate( id, RULES );

    return this.trim( id );
  }

  private trim( value: string ): string {
    return value.trim();
  }
}
