import { authHeader } from '../helpers';

const URL = 'http://localhost:8000/api/v1.0.0';

export const userService = {
  login,
  logout,
  getAll,
  getById,
  deleteUser
};

function login(username, password) {
  const requestOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({'Username': username, 'Password': password})
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

  return fetch(URL + '/users', requestOptions)
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


function deleteUser(UserId) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  return fetch(URL+ '/users/' + UserId, requestOptions)
    .then(response => {
      if(!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
}
