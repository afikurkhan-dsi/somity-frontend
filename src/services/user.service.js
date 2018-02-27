import { authHeader } from '../helpers';
import { handler } from './handler.service';
import URL from './url';

export const userService = {
  login,
  logout,
  getAll,
  get,
  deleteUser,
  create
};

function login(username, password) {
  const requestOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({'Username': username, 'Password': password})
  };

  return fetch(URL + '/user_sessions', requestOption)
    .then(response => handler(response))
    .then(user => {
      if(user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('username', JSON.stringify(username));
      }
      return user;
    });
}


function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('username');
}


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(URL + '/users', requestOptions)
    .then(response => handler(response));
}

function get(userId) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(URL+ '/users/' + userId, requestOptions)
    .then(response => handler(response))
}


function deleteUser(UserId) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  return fetch(URL+ '/users/' + UserId, requestOptions)
    .then(response => handler(response))
}

function create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({
      "Username": Username,
      "Password": Password,
      "FirstName": FirstName,
      "LastName": LastName,
      "IsActive": IsActive,
      "Email": Email,
      "Phone": Phone,
      "Address": Address,
      "Scope": Scope
    })
  };

  return fetch(URL + '/users', requestOptions)
    .then(response => handler(response));
}
