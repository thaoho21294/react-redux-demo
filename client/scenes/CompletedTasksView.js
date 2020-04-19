import React from 'react';
import PropTypes from 'prop-types';

export default function CompletedTaskView(props) {
  const { tasks } = props;
  return (<ul>
    {tasks.map(task => <li>{task.title}</li>)}
  </ul>);
}

CompletedTaskView.propTypes = {
  tasks: PropTypes.array.isRequired,
};
