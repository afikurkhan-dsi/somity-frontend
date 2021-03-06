import { authHeader } from '../helpers';
import { handler } from './handler.service';
import { encodeData } from './../components/common/utils';
import URL from './url';

export const paymentService = {
  getStatistics,
  pay,
  getPaymentDue,
  getPaymenById
}

function getStatistics(FromDate, ToDate) {
  let newUrl = URL+ `/financial_statistics`;
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  if(FromDate && ToDate) {
    newUrl += `?FromDate=${FromDate}&ToDate=${ToDate}`
  }
  return fetch(newUrl, requestOptions)
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


function getPaymentDue(Username, FirstName, LastName, Email, Phone) {
  let newUrl = `${URL}/payment_dues?`
  const obj = {};
  if(Username) obj['Username'] = Username;
  if(FirstName) obj['FirstName'] = FirstName;
  if(LastName) obj['LastName'] = LastName;
  if(Email) obj['Email'] = Email;
  if(Phone) obj['Phone'] = Phone;

  newUrl += encodeData(obj);

  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  
  return fetch(newUrl, requestOptions)
    .then(response => handler(response));
}

function getPaymenById(UserId) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${URL}/users/${UserId}/payments`, requestOptions)
    .then(response => handler(response));
}
