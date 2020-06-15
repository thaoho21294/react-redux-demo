import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Form, Col } from 'react-bootstrap';
import { completeTaskEffect } from '../redux/effect';

import { deleteTask } from '../redux/actions';
import { TASK_STATUS } from '../constant';
import Style from '../styles/home.module.scss';

export default function Task({ task }) {
  const { id, status, title } = task;
  const isCompleted = status === TASK_STATUS.COMPLETED;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isShowAction, setIsShowAction] = useState(false);
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

  function onHover() {
    setIsShowAction(true);
  }

  function onLeave() {
    setIsShowAction(false);
  }

  return (
    <Form onMouseEnter={onHover} onMouseLeave={onLeave} className={isShowAction ? Style.border : ''}>
      <Form.Row>
        <Col xs={8}>
          <div
            className={Style.lineheight}
            style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
          >{title}</div>
        </Col>
        {isShowAction && <Col>
          <Button type="button" onClick={onComplete} variant="outline-primary">
            {isCompleted ? 'Undo' : 'Complete' }
          </Button>{' '}
          <Button type="button" onClick={onDelete} variant="outline-danger">
            Delete
          </Button>
        </Col>}
      </Form.Row>
      { error && <div className="text-danger">error</div> }
      { loading && <div className="text-info">loading...</div> }
    </Form>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.boolean,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
