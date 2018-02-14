import { userService } from '../services';
import { history } from '../helpers';
import { userConstants } from '../constants';

export const userActions = {
  login,
  logout,
  getAll,
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
              error => dispatch(failure(error))
          );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


function deleteUser(id) {
  return dispatch => {
      dispatch(request());

      userService.deleteUser(id)
          .then(
              response => dispatch(success()),
              error => dispatch(failure(error))
          );
  };

  function request() { return { type: userConstants.DELETE_REQUEST } }
  function success(response) { return { type: userConstants.DELETE_SUCCESS, response } }
  function failure(error) { return { type: userConstants.DELETE_FAILURE, error } }
}
