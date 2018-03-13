import { authHeader } from '../helpers';
import { handler } from './handler.service';
import { encodeData } from './../components/common/utils';
import URL from './url';

export const userService = {
  login,
  logout,
  getAll,
  get,
  deleteUser,
  create,
  update,
  getByUsername
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


function getAll(Username, FirstName, LastName, Email, Phone) {
  let newUrl = `${URL}/users?`
  const obj = {};
  
  if(Username) obj['Username'] = Username;
  if(FirstName) obj['FirstName'] = FirstName;
  if(LastName) obj['LastName'] = LastName;
  if(Email) obj['Email'] = Email;
  if(Phone) obj['Phone'] = Phone;
  
  newUrl += encodeData(obj);

  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(newUrl, requestOptions)
    .then(response => handler(response));
}

function getByUsername(Username) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${URL}/users?Username=${Username}`, requestOptions)
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

function update(UserId, FirstName, LastName, Email, Phone, Address, IsActive, Scope) {
  const requestOptions = {
    method: 'PATCH',
    headers: authHeader(),
    body: JSON.stringify({
      "FirstName": FirstName,
      "LastName": LastName,
      "IsActive": IsActive,
      "Email": Email,
      "Phone": Phone,
      "Address": Address,
      "Scope": Scope
    })
  };

  return fetch(`${URL}/users/${UserId}`, requestOptions)
    .then(response => handler(response));
}
