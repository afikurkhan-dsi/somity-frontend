import { paymentService } from '../services';
import { paymentConstants } from '../constants';

export const paymentActions = {
  getStatistics,
}

function getStatistics(FromDate, ToDate) {
  return dispatch => {
    dispatch(request());

    paymentService.getStatistics(FromDate, ToDate)
      .then(
        statistics => dispatch(success(statistics)),
        error => dispatch(failure(error))
      )
  }

  function request() { return { type: paymentConstants.STATISTICS_REQUEST } }
  function success(data) { return { type: paymentConstants.STATISTICS_SUCCESS, data } }
  function failure(error) { return { type: paymentConstants.STATISTICS_FAILURE, error } }
}
