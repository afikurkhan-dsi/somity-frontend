import { authHeader } from '../helpers';
import { handler } from './handler.service';
import URL from './url';

export const paymentService = {
  getStatistics,
  pay
}

function getStatistics(FromDate, ToDate) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(URL+ `/financial_statistics`, requestOptions)
    .then(response => handler(response));
}

function pay(UserId, PaymentAmount, PaymentDate, SubmittedBy, SubmitterNote) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({
      "PaymentAmount": PaymentAmount,
      "PaymentDate": PaymentDate,
      "SubmittedBy": SubmittedBy,
      "SubmitterNote": SubmitterNote
    })
  };

  return fetch(`${URL}/users/${UserId}/payments`, requestOptions)
    .then(response => handler(response));
}
