import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddTaskForm from '../../../components/AddTaskForm';
import { todoTasksSelector } from '../../../redux/task/task.selector';

export default function TodoTasksView() {
  const tasks = useSelector(todoTasksSelector);

  const [showAddForm, setShowAddForm] = useState(false);
  let alert = '';

  function onClickCreate() {
    setShowAddForm(true);
  }

  if (tasks.length === 0) {
    alert = (<Alert variant="success">
      No todo tasks, Click
      <Alert.Link onClick={onClickCreate}>here</Alert.Link> to create!
    </Alert>);
  }

  return (<div>
    {alert}
    {showAddForm && <AddTaskForm />}
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  </div>);
}
