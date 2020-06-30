import { put, call } from 'redux-saga/effects';
import { timeSlotService } from './timeSlotService';

import * as types from './timeslotTypes'

export function* getTimeSlotSaga(payload) {
  try {
    const response = yield call(timeSlotService, payload);
    yield [
      put({ type: types.GET_TIME_SLOT_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.GET_TIME_SLOT_ERROR, error })
  }
}