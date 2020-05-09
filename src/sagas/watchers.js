import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';
import { getTimeSlotSaga } from './timeSlotSaga';
import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_TIME_SLOT, getTimeSlotSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}