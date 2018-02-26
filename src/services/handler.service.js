export function handler (response) {
  if(!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
}
