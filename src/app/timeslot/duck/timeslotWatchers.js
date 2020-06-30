import { takeLatest } from 'redux-saga/effects';

import { getTimeSlotSaga } from './timeSlotSaga';
import * as types from './timeslotTypes';


export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_TIME_SLOT, getTimeSlotSaga);
 
}