import { userService } from '../services';
import { history } from '../helpers';
import { userConstants } from '../constants';
import { handleError } from './handler.actions';

export const userActions = {
  login,
  logout,
  getAll,
  get,
  create,
  deleteUser
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success({username, user}));
          history.push('/dashboard');
        },
        error => {
          dispatch(failure(error));
        }
      )
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => handleError(dispatch, userConstants.GETALL_FAILURE, error)
      );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
}

function get(UserId) {
  return dispatch => {
    dispatch(request());

    userService.get(UserId)
      .then(
        user => dispatch(success(user)),
        error => handleError(dispatch, userConstants.GETALL_FAILURE, error)
      );
  };

  function request() { return { type: userConstants.GET_REQUEST } }
  function success(user) { return { type: userConstants.GET_SUCCESS, user } }
}

function create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) {
  return dispatch => {
    dispatch(request());

    userService.create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope)
      .then(
        user => dispatch(success(user)),
        error => handleError(dispatch, userConstants.GETALL_FAILURE, error)
      );
  };

  function request() { return { type: userConstants.CREATE_REQUEST } }
  function success(user) { return { type: userConstants.CREATE_SUCCESS, user } }
}

function deleteUser(id) {
  return dispatch => {
    dispatch(request());

    userService.deleteUser(id)
      .then(
        response => dispatch(success()),
        error => handleError(dispatch, userConstants.GETALL_FAILURE, error)
      );
  };

  function request() { return { type: userConstants.DELETE_REQUEST } }
  function success(response) { return { type: userConstants.DELETE_SUCCESS, response } }
}
