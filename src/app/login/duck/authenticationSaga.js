import { put, call } from 'redux-saga/effects';
import { loginUserService } from './authenticationService';

import * as types from './authenticationTypes'

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}