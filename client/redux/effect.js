import { getTasks, addTask } from './actions';
import { getTasksApi, postTaskApi } from '../service/tasksService';

export async function fetchTasksEffect({ dispatch, setError, setLoading }) {
  try {
    const response = await getTasksApi();
    const json = await response.json();
    dispatch(getTasks(json));
  } catch (e) {
    setError(e.message || 'Unexpected Error!!!');
  }
  setLoading(false);
}

export async function postTaskEffect({ title, dispatch, setError, setLoading }) {
  setLoading(true);
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await postTaskApi(title);
    const newTask = await response.json();
    dispatch(addTask(newTask));
  } catch (e) {
    setError(e.message || 'Unexpected Error!!!');
  }
  setLoading(false);
}
