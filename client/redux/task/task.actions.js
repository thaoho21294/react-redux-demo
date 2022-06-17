const GET_ALL_TASKS = 'GET_ALL_TASKS'
const ADD_TASK = 'POST_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const DELETE_TASK = 'DELETE_TASK'
const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'

export { GET_ALL_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK, SET_CURRENT_VIEW }

export const getTasks = (tasks) => {
  return { type: GET_ALL_TASKS, tasks }
}
export const addTask = (task) => {
  return { type: ADD_TASK, task }
}
export const updateTask = (updatedTask) => {
  return { type: UPDATE_TASK, updatedTask }
}
export const deleteTask = (taskId) => {
  return { type: DELETE_TASK, taskId }
}
export const setCurrentView = (view) => {
  return { type: SET_CURRENT_VIEW, view }
}
