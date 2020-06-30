import * as types from './authenticationTypes';

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};
