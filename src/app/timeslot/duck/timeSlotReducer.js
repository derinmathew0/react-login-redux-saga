import * as types from './timeslotTypes';
import * as _ from 'underscore';
const initState = {
    response: [],
    dates: [],
    activeDate: '',
    timeSlotsByDate: [],
    timeSlotsBySection:[],
}
export default function (state = initState, action) {
    const response = action.response;

    let timeSlotsByDate, timeSlotsByDates,timeSlotsBySection;

    
    switch (action.type) {
        case types.GET_TIME_SLOT_SUCCESS:
            timeSlotsByDates = _.groupBy(response.data, 'date');
            let dates = Object.keys(timeSlotsByDates);
            let activeDate = dates[0];
            timeSlotsByDate = timeSlotsByDates[Object.keys(timeSlotsByDates)[0]];
            timeSlotsBySection =  getTimeSlotsBySection(timeSlotsByDate);

            return { ...state, response, dates, activeDate, timeSlotsBySection };

        case types.GET_TIME_SLOTS_BY_DATE:


            timeSlotsByDate = state.response.data.filter(item => action.date === item.date)
            timeSlotsBySection =  getTimeSlotsBySection(timeSlotsByDate);
            return { ...state, activeDate: action.date, timeSlotsBySection };

        case types.GET_TIME_SLOT_ERROR:
            return { ...state, response };
        default:
            return state;
    }
    function getTimeSlotsBySection(timeSlotsByDate) {
        let timeSlotsBySection = {
            'morning': [],
            'noon': [],
            'evening': [],

        };
        

        // timeSlotsByDate.map((slot) => {
        //     if (slot.time < '12:00:00') {
        //         timeSlotsBySection['morning'].push(slot);
        //     }
        //     else if (slot.time < '16:00:00' && slot.time >= '14:00:00') {
        //         timeSlotsBySection['noon'].push(slot);
        //     }
        //     else if (slot.time <= '17:00:00' && slot.time >= '16:00:00') {
        //         timeSlotsBySection['evening'].push(slot);
        //     }
        // })
        return timeSlotsBySection;
    }
};