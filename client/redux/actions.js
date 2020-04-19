const GET_ALL_TASKS = 'GET_ALL_TASKS';
const POST_TASK = 'POST_TASK';
const CHANGE_STATUS = 'CHANGE_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

export { GET_ALL_TASKS, POST_TASK, CHANGE_STATUS, DELETE_TASK, SET_CURRENT_VIEW };

export const getTasks = (tasks) => { return { type: GET_ALL_TASKS, tasks }; };
export const addTask = (task) => { return { type: POST_TASK, task }; };
export const changeStatus = (taskId, status) => { return { type: CHANGE_STATUS, taskId, status }; };
export const deleteTask = (taskId) => { return { type: DELETE_TASK, taskId }; };
export const setCurrentView = (view) => { return { type: SET_CURRENT_VIEW, view }; };
