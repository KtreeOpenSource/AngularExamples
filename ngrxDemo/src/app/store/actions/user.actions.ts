import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
}

export class LoadUsers implements Action {
  constructor(
    public users: any
  ) {}

  readonly type = UserActionTypes.LoadUsers;
}


export type UserActions = LoadUsers;
