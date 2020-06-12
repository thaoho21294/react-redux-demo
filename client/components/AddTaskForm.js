import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { postTaskEffect } from '../redux/effect';
import Style from '../styles/home.module.scss';

function AddTaskForm() {
  const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    loading: false,
    error: null,
    isShowForm: false,
  });
  const dispatch = useDispatch();

  async function onSubmit(evt) {
    evt.preventDefault();
    const { taskNameInput } = evt.target.elements;
    await postTaskEffect(dispatch, setState, { title: taskNameInput.value });
  }

  function onClickAddTask() {
    setState({ isShowForm: true });
  }

  function onClickCancel() {
    setState({ isShowForm: false });
  }

  return (
    <div className={Style.marginTop}>
      {!state.isShowForm && <Button variant="outline-info" onClick={onClickAddTask}>
        <span>+</span> Add Task
      </Button>}
      {state.isShowForm && <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control id="taskNameInput" name="taskName" placeholder="ex: Learn Vue in 2 month" />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="success">Add Task</Button>{' '}
          <Button variant="outline-secondary" onClick={onClickCancel}>Cancel</Button>
        </Form.Group>
      </Form>}
      { state.error && <div className="text-danger">error</div> }
      { state.loading && <div className="text-info">loading...</div> }
    </div>
  );
}

export default React.memo(AddTaskForm);
