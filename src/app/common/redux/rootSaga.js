import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../../login/duck/loginWatchers';
import watchTimeslot from '../../timeslot/duck/timeslotWatchers';
export default function* startForman() {
  yield fork(watchUserAuthentication);
  yield fork(watchTimeslot);
}