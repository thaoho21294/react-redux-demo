import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VIEW_TYPE } from '../../../constant';
import TasksView from './TasksView';
import CompletedTaskView from './CompletedTasksView';
import TodoTasksView from './TodoTasksView';
import ThisWeekTasksView from './ThisWeekTasksView';
import { fetchTasksEffect } from '../../../redux/effect';
import {
  tasksSelector,
  todoTasksSelector,
  completedTasksSelector,
  todayTasksSelector,
  tomorrowTasksSelector,
  thisWeekTasksGroupByWeekdaySelector,
} from '../home.selector';

export default function MainView() {
  const tasks = useSelector(tasksSelector);
  const todoTasks = useSelector(todoTasksSelector);
  const completedTasks = useSelector(completedTasksSelector);
  const todayTasks = useSelector(todayTasksSelector);
  const tomorrowTasks = useSelector(tomorrowTasksSelector);
  const thisWeekTasks = useSelector(thisWeekTasksGroupByWeekdaySelector);
  const view = useSelector(state => state.view);

  const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    loading: true,
    error: null,
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchTasksEffect(dispatch, setState);
  }, []);

  if (state.loading) {
    return <div>Loading</div>;
  }

  if (state.error) {
    return <div className="text-danger">ERROR: {state.error}</div>;
  }

  switch (view) {
    case VIEW_TYPE.ALL_TASK: return <TasksView tasks={tasks} />;
    case VIEW_TYPE.COMPLETED_TASK: return <CompletedTaskView tasks={completedTasks} />;
    case VIEW_TYPE.TODO_TASK: return <TodoTasksView tasks={todoTasks} />;
    case VIEW_TYPE.TODAY_TASK: return <TasksView tasks={todayTasks} />;
    case VIEW_TYPE.TOMORROW_TASK: return <TasksView tasks={tomorrowTasks} />;
    case VIEW_TYPE.THIS_WEEK_TASK: return <ThisWeekTasksView tasks={thisWeekTasks} />;
    default: return '';
  }
}

MainView.defaultProps = {
  view: VIEW_TYPE.ALL_TASK,
};
