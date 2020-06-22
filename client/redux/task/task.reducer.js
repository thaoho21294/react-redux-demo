import { GET_ALL_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './task.actions';
import toWeekDay from '../../utils/toWeekday';

export default function reducer(tasks = [], action) {
  switch (action.type) {
    case GET_ALL_TASKS: return action.tasks;
    case ADD_TASK: {
      const updatedTask = [...tasks];
      updatedTask.push({
        ...action.task,
        weekday: toWeekDay(action.task.date),
      });
      return updatedTask;
    }
    case UPDATE_TASK: {
      const newArr = tasks.map((task) => {
        if (task.id === action.updatedTask.id) {
          return { ...task, ...action.updatedTask };
        }
        return task;
      });

      return newArr;
    }
    case DELETE_TASK: {
      return tasks.filter((task) => {
        return !(task.id === action.taskId);
      });
    }
    default: return tasks;
  }
}
