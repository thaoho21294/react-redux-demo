import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VIEW_TYPE, TASK_STATUS } from '../constant';
import AllTasksView from './AllTasksView';
import CompletedTaskView from './CompletedTasksView';
import TodoTasks from './TodoTasksView';
import { fetchTasksEffect } from '../redux/effect';

export default function MainView() {
  const tasks = useSelector(state => state.tasks);
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
    case VIEW_TYPE.ALL_TASK: return <AllTasksView tasks={tasks} />;
    case VIEW_TYPE.COMPLETED_TASK: {
      const completedTasks = tasks.filter(task => task.status === TASK_STATUS.COMPLETED);
      return <CompletedTaskView tasks={completedTasks} />;
    }
    case VIEW_TYPE.TODO_TASK: {
      const todoTasks = tasks.filter(task => task.status === TASK_STATUS.TODO);
      return <TodoTasks tasks={todoTasks} />;
    }
    default: return '';
  }
}

MainView.defaultProps = {
  view: VIEW_TYPE.ALL_TASK,
};
