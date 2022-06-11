import React from 'react';
import { useSelector } from 'react-redux';

import { VIEW_TYPE } from '../../../constant';
import TasksView from './TasksView';
import CompletedTaskView from './CompletedTasksView';
import TodoTasksView from './TodoTasksView';
import ThisWeekTasksView from './ThisWeekTasksView';
import { useFetchTasks } from '../../../hooks/useFetchTasks';
import {
  tasksSelector,
  todayTasksSelector,
  tomorrowTasksSelector,
} from '../../../redux/task/task.selector';

export default function MainView() {
  const tasks = useSelector(tasksSelector);
  const todayTasks = useSelector(todayTasksSelector);
  const tomorrowTasks = useSelector(tomorrowTasksSelector);
  const view = useSelector(state => state.view);
  const { loading, error } = useFetchTasks();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">ERROR: {error}</div>;
  }

  switch (view) {
    case VIEW_TYPE.ALL_TASK: return <TasksView tasks={tasks} />;
    case VIEW_TYPE.COMPLETED_TASK: return <CompletedTaskView />;
    case VIEW_TYPE.TODO_TASK: return <TodoTasksView />;
    case VIEW_TYPE.TODAY_TASK: return <TasksView tasks={todayTasks} />;
    case VIEW_TYPE.TOMORROW_TASK: return <TasksView tasks={tomorrowTasks} />;
    case VIEW_TYPE.THIS_WEEK_TASK: return <ThisWeekTasksView />;
    default: return '';
  }
}

MainView.defaultProps = {
  view: VIEW_TYPE.ALL_TASK,
};
