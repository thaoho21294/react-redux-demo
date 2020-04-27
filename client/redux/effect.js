import { getTasks, addTask, updateTask } from './actions';
import { getTasksApi, postTaskApi, putTaskApi } from '../service/tasksService';

export async function fetchTasksEffect(dispatch, setState) {
  try {
    const response = await getTasksApi();
    const json = await response.json();
    dispatch(getTasks(json));
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function postTaskEffect(dispatch, setState, { title }) {
  setState({ loading: true });
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await postTaskApi(title);
    const newTask = await response.json();
    dispatch(addTask(newTask));
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function completeTaskEffect({ updatedTask, dispatch, setError, setLoading }) {
  setLoading(true);
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await putTaskApi(updatedTask);
    const newTask = await response.json();
    dispatch(updateTask(newTask));
  } catch (e) {
    setError(e.message || 'Unexpected Error!!!');
  }
  setLoading(false);
}
