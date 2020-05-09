import { getCookie } from '../utils/cookies';
export const timeSlotService = (request) => {
    const TIME_SLOT_API_ENDPOINT = 'https://dapi.quikdr.com/schedules?doctorsId=20&organisationsId=2&&date%5b$gte%5d=2020-05-06&date%5b$lte%5d=2020-05-16&$skip=0&$limit=500&$sort%5bdate%5d=1&$sort%5btime%5d=1';
  
    const parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-header-security' :'C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx',
        'Authorization':getCookie("token")
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(TIME_SLOT_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };