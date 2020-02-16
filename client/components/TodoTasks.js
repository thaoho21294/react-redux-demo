import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import AddTaskForm from '../components/AddTaskForm';

export default function TodoTasks(props) {
  const [showAddForm, setShowAddForm] = useState(false);
  const { tasks } = props;
  let alert = '';

  if (tasks.length === 0) {
    alert = (<Alert variant="success">
      No todo tasks, Click
      <Alert.Link onClick={() => setShowAddForm(true)}>here</Alert.Link> to create!
    </Alert>);
  }

  return (<div>
    {alert}
    {showAddForm && <AddTaskForm />}
    <ul>
      {tasks.map(task => <li>{task.title}</li>)}
    </ul>
  </div>);
}

TodoTasks.propTypes = {
  tasks: Proptypes.array.isRequired,
};
