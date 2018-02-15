import { userConstants } from '../constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      return {
        deleting: true
      }
    case userConstants.DELETE_SUCCESS:
      return {
        deleted: true
      }
    case userConstants.DELETE_FAILURE:
      return {
        error: action.error
      }
    case userConstants.CREATE_REQUEST:
      return {
        creating: true
      }
    case userConstants.CREATE_SUCCESS:
      return {
        created: true,
        user: action.user
      }
    case userConstants.CREATE_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
