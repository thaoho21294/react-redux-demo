import { API_BASE_ADDRESS } from '../../constant';

const uri = `${API_BASE_ADDRESS}/user`;

export function getUserApi() {
  return fetch(uri);
}

export function putUserApi(user) {
  return fetch(`${uri}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...user }),
  });
}
