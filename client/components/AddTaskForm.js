import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTaskEffect } from '../redux/effect';

function AddTaskForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  async function onSubmit(evt) {
    evt.preventDefault();
    const title = evt.target.taskName.value;
    await postTaskEffect({ title, dispatch, setLoading, setError });
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="taskName1">Add New To-Do</label>
          <input id="taskName1" name="taskName" placeholder="Enter new task" />
        </div>
        <button type="submit">Add</button>
      </form>
      { error && <div className="text-danger">error</div> }
      { loading && <div className="text-info">loading...</div> }
    </React.Fragment>
  );
}

export default React.memo(AddTaskForm);
