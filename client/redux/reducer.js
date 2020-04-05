import { TASK_STATUS, VIEW_TYPE } from '../constant';

const GET_ALL_TASKS = 'GET_ALL_TASKS';
const POST_TASK = 'POST_TASK';
const CHANGE_STATUS = 'CHANGE_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';
export const getTasks = (tasks) => { return { type: GET_ALL_TASKS, tasks }; };
export const addTask = (task) => { return { type: POST_TASK, task }; };
export const changeStatus = (taskId, status) => { return { type: CHANGE_STATUS, taskId, status }; };
export const deleteTask = (taskId) => { return { type: DELETE_TASK, taskId }; };
export const setCurrentView = (view) => { return { type: SET_CURRENT_VIEW, view }; };

const initial = {
  tasks: [],
  view: VIEW_TYPE.ALL_TASK,
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_TASKS: return { ...state, tasks: action.tasks };
    case POST_TASK: {
      const updateTasks = [...state.tasks];
      updateTasks.push(action.task);
      return { ...state, tasks: updateTasks };
    }
    case CHANGE_STATUS: {
      const newArr = state.tasks.map((task) => {
        if (task.id === action.taskId) {
          switch (action.status) {
            case TASK_STATUS.COMPLETED: return { ...task, isCompleted: !task.isCompleted };
            case TASK_STATUS.BLOCKED: return { ...task, isBlocked: !task.isBlocked };
            default: return task;
          }
        }
        return task;
      });
      return { ...state, tasks: newArr };
    }
    case DELETE_TASK: {
      const removedTasks = state.tasks.filter((task) => {
        return !(task.id === action.taskId);
      });
      return { ...state, tasks: removedTasks };
    }
    case SET_CURRENT_VIEW : {
      return { ...state, view: action.view };
    }
    default:
      return state;
  }
};

export default reducer;
