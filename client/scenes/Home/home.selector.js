import { createSelector } from 'reselect';
import moment from 'moment';
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
    return moment(task.date).isSame(moment(), 'day');
  }),
);

const tomorrowTasksSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter((task) => {
    return moment().add(1, 'days').isSame(moment(task.date), 'day');
  }),
);

const thisWeekTaskSelector = createSelector(
  tasksSelector,
  tasks => tasks.filter((task) => {
    const next7day = moment().add(7, 'days');
    const taskDate = moment(task.date);
    return taskDate.isSameOrBefore(next7day, 'day') && taskDate.isSameOrAfter(moment(), 'day');
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
