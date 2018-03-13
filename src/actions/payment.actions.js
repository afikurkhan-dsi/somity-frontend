import { paymentService } from '../services';
import { paymentConstants } from '../constants';
import { handleError } from './handler.actions';

export const paymentActions = {
  getStatistics,
  pay,
  getPaymentDue,
  getPaymenById
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

function pay(UserId, PaymentAmount, PaymentDate, SubmittedBy, SubmitterNote) {
  return dispatch => {
    dispatch(request());

    paymentService.pay(UserId, PaymentAmount, PaymentDate, SubmittedBy, SubmitterNote)
      .then(
        data => dispatch(success(data)),
        error=> handleError(dispatch, paymentConstants.PAY_FAILURE, error)
      );
  }

  function request() { return { type: paymentConstants.PAY_REQUEST } }
  function success(data) { return { type: paymentConstants.PAY_SUCCESS, data } }
}

function getPaymentDue(Username, FirstName, LastName, Email, Phone) {
  return dispatch => {
    dispatch (request());
    paymentService.getPaymentDue(Username, FirstName, LastName, Email, Phone)
      .then(
        data => dispatch(success(data)),
        error => handleError(dispatch, paymentConstants.FAILURE_PAYMENT_DUE)
      );
  }
  function request() { return { type: paymentConstants.REQUEST_PAYMENT_DUE } }
  function success(data) { return { type: paymentConstants.SUCCESS_PAYMENT_DUE, data } }
}

function getPaymenById(UserId) {
  return dispatch => {
    dispatch (request());
    paymentService.getPaymenById(UserId)
      .then(
        data => dispatch(success(data)),
        error => handleError(dispatch, paymentConstants.GET_PAYMENT_BY_ID_FAILURE)
      );
  }
  function request() { return { type: paymentConstants.GET_PAYMENT_BY_ID_REQUEST } }
  function success(data) { return { type: paymentConstants.GET_PAYMENT_BY_ID_SUCCESS, data } }
}
