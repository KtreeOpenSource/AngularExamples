import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State {
  users: any;
}

export const initialState: State = {
  users: []
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {...state, users: action.users};
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
