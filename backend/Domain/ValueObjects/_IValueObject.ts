export abstract class IValueObject<T> {
  public readonly value: T;

  constructor( value: T ) {
    this.value = this.create( value );
  }

  protected abstract create( value: T ): T;
};
