import React from 'react';
import PropTypes from 'prop-types';

export default function CompletedTaskView({ tasks }) {
  return (<ul>
    {tasks.map(task => <li key={task.id}>{task.title}</li>)}
  </ul>);
}

CompletedTaskView.propTypes = {
  tasks: PropTypes.array.isRequired,
};
