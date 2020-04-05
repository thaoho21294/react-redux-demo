
const API_BASE_ADDRESS = 'http://localhost:4000';

const uri = `${API_BASE_ADDRESS}/tasks`;

export function getTasksApi() {
  return fetch(uri, { method: 'GET' });
}

export function postTaskApi(title) {
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, isCompleted: false }) });
}
