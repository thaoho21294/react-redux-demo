import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { changeStatus, deleteTask } from '../redux/reducer';
import { TASK_STATUS } from '../constant';

export default function Task({ task: { id, isCompleted, title } }) {
  const dispatch = useDispatch();

  const onComplete = useCallback(() => {
    dispatch(changeStatus(id, TASK_STATUS.COMPLETED));
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
