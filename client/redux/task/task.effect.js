import { addTask, updateTask, deleteTask } from './task.actions'
import {
  postTaskApi,
  putTaskApi,
  deleteTaskApi,
} from '../../services/task.service'

export async function postTaskEffect(
  dispatch,
  setState,
  { title, date, weekday },
) {
  setState({ loading: true })
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await postTaskApi(title, date, weekday)
    const newTask = await response.json()
    dispatch(addTask(newTask))
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' })
  }
  setState({ loading: false, error: null })
}

export async function completeTaskEffect({ updatedTask, dispatch, setState }) {
  setState({ loading: true })
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await putTaskApi(updatedTask)
    const newTask = await response.json()
    dispatch(updateTask(newTask))
  } catch (e) {
    setState({ error: e.message || 'Unexpected Error!!!' })
  }
  setState({ loading: false })
}

export async function deleteTaskEffect({ id, dispatch, setError }) {
  try {
    dispatch(deleteTask(id))
    deleteTaskApi(id)
  } catch (e) {
    setError(e.message || 'Unexpected Error!!!')
  }
}
