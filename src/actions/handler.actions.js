import { userConstants } from './../constants';

export function handleError(dispatch, actionType, error) {
  if (error === 'Unauthorized') {
    delete localStorage['user'];
    dispatch({
      type: userConstants.LOGOUT
    });
  } else {
    dispatch({
      type: actionType,
      error
    });
  }
}
