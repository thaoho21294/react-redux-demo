import { getTasks, addTask, updateTask, deleteTask } from './actions';
import { getTasksApi, postTaskApi, putTaskApi, deleteTaskApi } from '../service/tasksService';

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

export async function postTaskEffect(dispatch, setState, { title, date }) {
  setState({ loading: true });
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await postTaskApi(title, date);
    const newTask = await response.json();
    dispatch(addTask(newTask));
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function completeTaskEffect({ updatedTask, dispatch, setState }) {
  setState({ loading: true });
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await putTaskApi(updatedTask);
    const newTask = await response.json();
    dispatch(updateTask(newTask));
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' });
  }
  setState({ loading: false });
}

export async function deleteTaskEffect({ id, dispatch, setError }) {
  try {
    deleteTaskApi(id);
    dispatch(deleteTask(id));
  } catch (e) {
    setError(e.message || 'Unexpected Error!!!');
  }
}
