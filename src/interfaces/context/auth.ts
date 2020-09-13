import { User } from '../User';

export interface State {
  authenticated: boolean;
  token?: string;
  user?: User;
}

export interface Methods {
  login(user: User, token: string): void;
  setUser(user: User): void;
  logout(): void;
}

export interface Action {
  type: ActionTypes;
  payload?: State;
}

export type ActionTypes = 'LOGIN' | 'LOGOUT' | 'SET_USER';
