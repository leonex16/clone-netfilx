import { generateUUID } from "../infrastructure/libs/uuid/uuid";

export abstract class Entity {
  private _id: string;
  private _createdAt: Date;
  private _updateAt: Date;

  constructor() {
    this._id = generateUUID();
    this._createdAt = new Date();
    this._updateAt = this._createdAt;
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updateAt(): Date {
    return this._updateAt;
  }

  set updateAt(value: Date) {
    this._updateAt = value;
  }

}