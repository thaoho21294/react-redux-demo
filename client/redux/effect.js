import { getTasks } from './reducer';
import { getTasksApi } from '../service/tasksService';

export default async function fetchTasksFromAPI({ dispatch, setError, setLoading }) {
  try {
    const response = await getTasksApi();
    const json = await response.json();
    dispatch(getTasks(json));
  } catch (e) {
    setError(e.message || 'Unexpected Error!!!');
  }
  setLoading(false);
}
