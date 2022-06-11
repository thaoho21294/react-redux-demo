import React from 'react';
import { useSelector } from 'react-redux';
import { completedTasksSelector } from '../../../redux/task/task.selector';

export default function CompletedTaskView() {
  const tasks = useSelector(completedTasksSelector);

  return (<ul>
    {tasks.map(task => <li key={task.id}>{task.title}</li>)}
  </ul>);
}
