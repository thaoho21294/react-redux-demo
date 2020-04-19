import { TASK_STATUS } from '../../constant';
import { GET_ALL_TASKS, POST_TASK, CHANGE_STATUS, DELETE_TASK } from '../actions';

const initState = {
  tasks: [],
};

export default function reducer(state = initState, action) {
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
    default: return state;
  }
}
