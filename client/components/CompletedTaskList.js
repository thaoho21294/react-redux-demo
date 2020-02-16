import React from 'react';
import PropTypes from 'prop-types';

export default function CompletedTaskList(props) {
  const { tasks } = props;
  return (<ul>
    {tasks.map(task => <li>{task.title}</li>)}
  </ul>);
}

CompletedTaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};
