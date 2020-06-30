import { combineReducers } from 'redux';
import timeSlot from '../../timeslot/duck/timeSlotReducer';
import login from '../../login/duck/loginReducer';

const rootReducer = combineReducers({
  timeSlot, login
});

export default rootReducer;