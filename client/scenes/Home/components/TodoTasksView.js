import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import AddTaskForm from '../../../components/AddTaskForm';

export default function TodoTasksView({ tasks }) {
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

TodoTasksView.propTypes = {
  tasks: Proptypes.array.isRequired,
};
