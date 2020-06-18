import { TASK_STATUS, API_BASE_ADDRESS } from '../constant';

export const uri = `${API_BASE_ADDRESS}/tasks`;

export function getTasksApi() {
  return fetch(uri, { method: 'GET' });
}

export function postTaskApi(title, date) {
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, status: TASK_STATUS.TODO, date }),
  });
}

export function putTaskApi(task) {
  return fetch(`${uri}/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...task }),
  });
}

export function deleteTaskApi(id) {
  return fetch(`${uri}/${id}`, {
    method: 'DELETE',
  });
}
