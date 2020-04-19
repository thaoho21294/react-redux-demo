import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { completeTaskEffect } from '../redux/effect';

import { deleteTask } from '../redux/actions';
import { TASK_STATUS } from '../constant';

export default function Task({ task }) {
  const { id, status, title } = task;
  const isCompleted = status === TASK_STATUS.COMPLETED;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onComplete = useCallback(() => {
    const updatedTask = {
      ...task,
      status: isCompleted ? TASK_STATUS.TODO : TASK_STATUS.COMPLETED };
    completeTaskEffect({ updatedTask, dispatch, setLoading, setError });
  });

  const onDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="row">
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button type="button" onClick={onComplete} variant="primary">
          {isCompleted ? 'Undo' : 'Complete' }
        </Button>
        <Button type="button" onClick={onDelete} variant="danger">
          Delete
        </Button>
      </div>
      <h3 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</h3>
      { error && <div className="text-danger">error</div> }
      { loading && <div className="text-info">loading...</div> }
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.boolean,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
