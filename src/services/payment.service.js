import { authHeader } from '../helpers';
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
    .then(response => {
      if(!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    });
}
