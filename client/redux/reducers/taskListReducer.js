import { GET_ALL_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions';

const initState = {
  tasks: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_TASKS: return { ...state, tasks: action.tasks };
    case ADD_TASK: {
      const updateTasks = [...state.tasks];
      updateTasks.push(action.task);
      return { ...state, tasks: updateTasks };
    }
    case UPDATE_TASK: {
      const newArr = state.tasks.map((task) => {
        if (task.id === action.updatedTask.id) {
          return { ...task, ...action.updatedTask };
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
