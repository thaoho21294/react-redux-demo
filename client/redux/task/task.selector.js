import { createSelector } from 'reselect'
import moment from 'moment'
import { TASK_STATUS } from '../../constant'

const tasksSelector = (state) => state.tasks

const todoTasksSelector = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task) => task.status === TASK_STATUS.TODO),
)

const completedTasksSelector = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task) => task.status === TASK_STATUS.COMPLETED),
)

const todayTasksSelector = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task) => {
    return moment(task.date).isSame(moment(), 'day')
  }),
)

const tomorrowTasksSelector = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task) => {
    return moment().add(1, 'days').isSame(moment(task.date), 'day')
  }),
)

const thisWeekTasksSelector = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task) => {
    const taskDate = moment(task.date)
    const fromDate = moment().startOf('isoWeek')
    const toDate = moment().endOf('isoWeek')
    return (
      taskDate.isSameOrBefore(toDate, 'day') &&
      taskDate.isSameOrAfter(fromDate, 'day')
    )
  }),
)

const thisWeekTasksGroupByWeekdaySelector = createSelector(
  thisWeekTasksSelector,
  (tasks) =>
    tasks.reduce((result, task) => {
      // eslint-disable-next-line no-param-reassign
      result[task.weekday] = [...(result[task.weekday] || []), task]
      return result
    }, {}),
)

export {
  tasksSelector,
  todoTasksSelector,
  completedTasksSelector,
  todayTasksSelector,
  tomorrowTasksSelector,
  thisWeekTasksGroupByWeekdaySelector,
}
