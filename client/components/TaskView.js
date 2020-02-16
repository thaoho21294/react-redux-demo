import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

export default function TaskView(props) {
  return (
    <div>
      <AddTaskForm />
      <TaskList tasks={props.tasks} />
    </div>);
}

TaskView.propTypes = {
  tasks: PropTypes.array.isRequired,
};
