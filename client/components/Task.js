import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Form, Col } from 'react-bootstrap';

import { completeTaskEffect } from '../redux/effect';
import { TASK_STATUS } from '../constant';
import Style from '../styles/home.module.scss';

export default function Task({ task, handleDeleteModalOpen }) {
  const { status, title, weekday } = task;
  const isCompleted = status === TASK_STATUS.COMPLETED;
  const dispatch = useDispatch();
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    loading: false,
    error: '',
    showAction: false,
    showDeleteModal: false,
  });

  const onComplete = useCallback(() => {
    const updatedTask = {
      ...task,
      status: isCompleted ? TASK_STATUS.TODO : TASK_STATUS.COMPLETED };
    completeTaskEffect({ updatedTask, dispatch, setState });
  });

  function onClickDelete() {
    handleDeleteModalOpen(task);
  }

  function onHover() {
    setState({ showAction: true });
  }

  function onLeave() {
    setState({ showAction: false });
  }

  return (
    <Form onMouseEnter={onHover} onMouseLeave={onLeave} className={state.showAction ? Style.border : ''}>
      <Form.Row>
        <Col xs={8}>
          <div style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {title}
          </div>
          <div className={Style.weekday}>{weekday}</div>
        </Col>
        {state.showAction && <Col>
          <Button type="button" onClick={onComplete} variant="outline-primary">
            {isCompleted ? 'Undo' : 'Complete' }
          </Button>{' '}
          <Button type="button" onClick={onClickDelete} variant="outline-danger">
            Delete
          </Button>
        </Col>}
      </Form.Row>
      { state.error && <div className="text-danger">error</div> }
      { state.loading && <div className="text-info">loading...</div> }
    </Form>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.boolean,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteModalOpen: PropTypes.func.isRequired,
};
