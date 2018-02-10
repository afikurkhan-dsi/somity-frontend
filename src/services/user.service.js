export const userService = {
  login,
};

function login(username, password) {
  const requestOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, password})
  };

  return fetch('/users/authenticate', requestOption)
    .then(response => {
      if(!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      if(user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}