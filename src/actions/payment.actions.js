import { paymentService } from '../services';
import { paymentConstants } from '../constants';
import { handleError } from './handler.actions';

export const paymentActions = {
  getStatistics,
}

function getStatistics(FromDate, ToDate) {
  return dispatch => {
    dispatch(request());

    paymentService.getStatistics(FromDate, ToDate)
      .then(
        statistics => dispatch(success(statistics)),
        error => handleError(dispatch, paymentConstants.STATISTICS_FAILURE, error)
      )
  }

  function request() { return { type: paymentConstants.STATISTICS_REQUEST } }
  function success(data) { return { type: paymentConstants.STATISTICS_SUCCESS, data } }
}
