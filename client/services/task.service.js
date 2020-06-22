import { TASK_STATUS, API_BASE_ADDRESS } from '../constant';

export const url = `${API_BASE_ADDRESS}/tasks`;

export function getTasksApi() {
  return fetch(url, { method: 'GET' });
}

export function postTaskApi(title, date) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, status: TASK_STATUS.TODO, date }),
  });
}

export function putTaskApi(task) {
  return fetch(`${url}/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...task }),
  });
}

export function deleteTaskApi(id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
}
