import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-date-picker';

import { postTaskEffect } from '../redux/task/task.effect';
import Style from '../styles/home.module.scss';

function AddTaskForm() {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    loading: false,
    error: null,
    isShowForm: false,
    taskDate: new Date(),
  });
  const dispatch = useDispatch();

  async function onSubmit(evt) {
    evt.preventDefault();
    const { taskNameInput } = evt.target.elements;
    const taskDateMilli = new Date(state.taskDate).getTime();
    await postTaskEffect(dispatch, setState, { title: taskNameInput.value, date: taskDateMilli });
  }

  function onClickAddTask() {
    setState({ isShowForm: true });
  }

  function onClickCancel() {
    setState({ isShowForm: false });
  }

  function selectDate(date) {
    setState({ taskDate: date });
  }

  return (
    <div className={Style.marginTop5}>
      {!state.isShowForm && <Button variant="outline-info" onClick={onClickAddTask}>
        <span>+</span> Add Task
      </Button>}
      {state.isShowForm && <Form onSubmit={onSubmit}>
        <InputGroup>
          <Form.Control id="taskNameInput" name="taskName" placeholder="ex: Learn Vue in 2 months" />
          <InputGroup.Append>
            <DatePicker onChange={selectDate} value={state.taskDate} format="MMM d" />
          </InputGroup.Append>
        </InputGroup>
        <Form.Group>
          <Button type="submit" variant="success">Add Task</Button>{' '}
          <Button variant="outline-secondary" onClick={onClickCancel}>Cancel</Button>
        </Form.Group>
      </Form>}
      { state.error && <div className="text-danger">{state.error}</div> }
      { state.loading && <div className="text-info">loading...</div> }
    </div>
  );
}

export default React.memo(AddTaskForm);
