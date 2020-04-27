import React from 'react';
import { useDispatch } from 'react-redux';
import { postTaskEffect } from '../redux/effect';

function AddTaskForm() {
  const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    loading: false,
    error: null,
  });
  const dispatch = useDispatch();

  async function onSubmit(evt) {
    evt.preventDefault();
    const { taskNameInput } = evt.target.elements;
    await postTaskEffect(dispatch, setState, { title: taskNameInput.value });
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="taskNameInput">Add New To-Do</label>
          <input id="taskNameInput" name="taskName" placeholder="Enter new task" />
        </div>
        <button type="submit">Add</button>
      </form>
      { state.error && <div className="text-danger">error</div> }
      { state.loading && <div className="text-info">loading...</div> }
    </React.Fragment>
  );
}

export default React.memo(AddTaskForm);
