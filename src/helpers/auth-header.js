export function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {
      'Content-Type': 'appliation/json',
      'Authorization': user.token
    };

  } else {
      return {};
  }
}
