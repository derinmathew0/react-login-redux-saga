export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'https://dapi.quikdr.com/authentication';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-header-security' :'C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
