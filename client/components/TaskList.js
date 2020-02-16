import React from 'react';
import PropTypes from 'prop-types';
import Task from '../components/Task';

export default function TaskList({ tasks }) {
  return (<div>
    {tasks.map(task =>
      <Task key={task.id} Obj={task} isCompleted={task.isCompleted} name={task.title} />)}
  </div>);
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};
