import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllTasks } from '../redux/reducer';
import { VIEW_TYPE } from '../constant';
import TaskView from './TaskView';
import CompletedTaskList from './CompletedTaskList';
import TodoTasks from './TodoTasks';


export default function MainView() {
  const tasks = useSelector(state => state.tasks);
  const view = useSelector(state => state.view);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

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
