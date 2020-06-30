import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';

import * as types from './authenticationTypes';


export default function* watchUserAuthentication() {
 
  yield takeLatest(types.LOGIN_USER, loginSaga);
}