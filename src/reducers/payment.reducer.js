import { paymentConstants } from '../constants/payment.constants';

export function payment(state={}, action) {
  switch(action.type) {
    case paymentConstants.STATISTICS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case paymentConstants.STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        statistics: action.data
      };
    case paymentConstants.STATISTICS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case paymentConstants.PAY_SUCCESS:
      return {
        ...state,
        paid: true,
        data: action.data
      }
    case paymentConstants.PAY_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;

  }
}
