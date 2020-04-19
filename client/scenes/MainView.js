import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VIEW_TYPE } from '../constant';
import AllTasksView from './AllTasksView';
import CompletedTaskView from './CompletedTasksView';
import TodoTasks from './TodoTasksView';
import fetchTasksFromAPI from '../redux/effect';


export default function MainView() {
  const tasks = useSelector(state => state.tasks);
  const view = useSelector(state => state.view);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTasksFromAPI({ dispatch, setError, setLoading });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>ERROR: {error}</div>;
  }

  switch (view) {
    case VIEW_TYPE.ALL_TASK: return <AllTasksView tasks={tasks} />;
    case VIEW_TYPE.COMPLETED_TASK: {
      const completedTasks = tasks.filter(task => task.isCompleted);
      return <CompletedTaskView tasks={completedTasks} />;
    }
    case VIEW_TYPE.TODO_TASK: {
      const todoTasks = tasks.filter(task => !task.isCompleted);
      return <TodoTasks tasks={todoTasks} />;
    }
    default: return '';
  }
}

MainView.defaultProps = {
  view: VIEW_TYPE.ALL_TASK,
};
