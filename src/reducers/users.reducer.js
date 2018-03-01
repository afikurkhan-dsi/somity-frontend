import { userConstants } from '../constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        ...state,
        error: action.error
      };
    
    case userConstants.GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user
      };
    case userConstants.GET_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting: true
      }
    case userConstants.DELETE_SUCCESS:
      return {
        ...state,
        deleting: false,
        deleted: true,
        items: action.users
      }
    case userConstants.DELETE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case userConstants.CREATE_REQUEST:
      return {
        ...state,
        creating: true
      }
    case userConstants.CREATE_SUCCESS:
      return {
        ...state,
        creating: false,
        created: true,
        user: action.user
      }
    case userConstants.CREATE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
