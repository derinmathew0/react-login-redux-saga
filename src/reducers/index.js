import { combineReducers } from 'redux';
import timeSlot from './timeSlotReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  timeSlot, login
});

export default rootReducer;