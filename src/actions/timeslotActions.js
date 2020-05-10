import * as types from './index';

export const getTimeSlotAction = () => {
  return {
    type: types.GET_TIME_SLOT
    
  }
};
export const getTimeSlotsByDate = (date) => {
    return {
      type: types.GET_TIME_SLOTS_BY_DATE,
      date:date
    }
  };