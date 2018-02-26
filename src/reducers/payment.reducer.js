import { paymentConstants } from '../constants/payment.constants';

export function payment(state={}, action) {
  switch(action.type) {
    case paymentConstants.STATISTICS_REQUEST:
      return {
        loading: true
      };
    case paymentConstants.STATISTICS_SUCCESS:
      return {
        loaded: true,
        statistics: action.data
      };
    case paymentConstants.STATISTICS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;

  }
}
