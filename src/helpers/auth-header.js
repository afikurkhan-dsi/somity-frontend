export function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {
      'Content-Type':  'application/json',
      'Accept':  'application/json',
      'Authorization': user.token
    };

  } else {
      return {};
  }
}
