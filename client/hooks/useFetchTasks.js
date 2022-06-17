import { useReducer, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTasks } from '../redux/task/task.actions'
import { getTasksApi } from '../services/task.service'

export const useFetchTasks = () => {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    data: [],
    loading: true,
    error: null,
  })
  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const response = await getTasksApi()
      const json = await response.json()
      dispatch(getTasks(json))
      setState({ data: json })
    } catch (e) {
      setState({ error: e.message || 'Unexpected Error!!!' })
    }
    setState({ loading: false })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return state
}

export default useFetchTasks
