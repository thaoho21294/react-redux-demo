import React from 'react';
import { useDispatch } from 'react-redux';
import { postNewTask } from '../redux/reducer';

function AddTaskForm() {
  const dispatch = useDispatch();

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(postNewTask(evt.target.taskName.value));
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="taskName1">Add New To-Do</label>
        <input id="taskName1" name="taskName" placeholder="Enter new task" />
      </div>
      <button type="submit">Add</button>
    </form>);
}

export default React.memo(AddTaskForm);
