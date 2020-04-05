import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTasks } from '../redux/reducer';
import { VIEW_TYPE } from '../constant';
import TaskView from './TaskView';
import CompletedTaskList from './CompletedTaskList';
import TodoTasks from './TodoTasks';
import { getTasksApi } from '../service/tasksService';


export default function MainView() {
  const tasks = useSelector(state => state.tasks);
  const view = useSelector(state => state.view);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTasksFromAPI() {
      try {
        const response = await getTasksApi();
        const json = await response.json();
        dispatch(getTasks(json));
      } catch (e) {
        setError(e.message || 'Unexpected Error!!!');
      }
      setLoading(false);
    }

    fetchTasksFromAPI();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>ERROR: {error}</div>;
  }

  switch (view) {
    case VIEW_TYPE.ALL_TASK: return <TaskView tasks={tasks} />;
    case VIEW_TYPE.COMPLETED_TASK: {
      const completedTasks = tasks.filter(task => task.isCompleted);
      return <CompletedTaskList tasks={completedTasks} />;
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
