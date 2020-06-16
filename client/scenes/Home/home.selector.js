import { createSelector } from 'reselect';
import { TASK_STATUS } from '../../constant';

const tasksSelector = state => state.tasks;

const todoTasksSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter(task => task.status === TASK_STATUS.TODO),
);

const completedTasksSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter(task => task.status === TASK_STATUS.COMPLETED),
);

const todayTasksSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter((task) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const taskDate = new Date(task.date);
    taskDate.setHours(0, 0, 0, 0);
    return currentDate.getTime() === taskDate.getTime();
  }),
);

const tomorrowTasksSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter((task) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const taskDate = new Date(task.date);
    taskDate.setHours(0, 0, 0, 0);
    return tomorrow.getTime() === taskDate.getTime();
  }),
);

const thisWeekTaskSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter((task) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const next7day = new Date();
    next7day.setDate(next7day.getDate() + 7);
    next7day.setHours(0, 0, 0, 0);
    const taskDate = new Date(task.date);
    taskDate.setHours(0, 0, 0, 0);
    return next7day.getTime() >= taskDate.getTime() && taskDate.getTime() >= currentDate.getTime();
  }),
);

export {
  tasksSelector,
  todoTasksSelector,
  completedTasksSelector,
  todayTasksSelector,
  tomorrowTasksSelector,
  thisWeekTaskSelector,
};
