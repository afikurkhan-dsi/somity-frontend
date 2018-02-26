import { authHeader } from '../helpers';
import { handler } from './handler.service';
import URL from './url';

export const paymentService = {
  getStatistics,
}

function getStatistics(FromDate, ToDate) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(URL+ `/financial_statistics`, requestOptions)
    .then(response => handler(response));
}
