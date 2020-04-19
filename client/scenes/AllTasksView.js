import React from 'react';
import PropTypes from 'prop-types';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

export default function AllTasksView(props) {
  return (
    <div>
      <AddTaskForm />
      <TaskList tasks={props.tasks} />
    </div>);
}

AllTasksView.propTypes = {
  tasks: PropTypes.array.isRequired,
};
