import { authHeader } from '../helpers';

const URL = 'http://10.0.0.12:3000/api/v1.0.0';

export const userService = {
  login,
  logout,
  getAll,
  getById
};

function login(username, password) {
  const requestOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({'Username': username, 'Password': password})
    // body: JSON.stringify({ username, password})
  };

  return fetch(URL + '/user_sessions', requestOption)
    .then(response => {
      if(!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      if(user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}


function logout() {
  localStorage.removeItem('user');
}


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  const uri = URL + '/users?token='+ JSON.parse(localStorage.getItem('user')).token;

  return fetch(uri, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
       }
       return response.json();
    });
}

function getById(userId) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(URL+ '/users/' + userId, requestOptions)
    .then(response => {
      if(!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
}
