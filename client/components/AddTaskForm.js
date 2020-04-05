import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducer';
import { postTaskApi } from '../service/tasksService';

function AddTaskForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function onSubmit(evt) {
    setLoading(true);
    evt.preventDefault();
    const title = evt.target.taskName.value;
    const response = await postTaskApi(title);
    setLoading(false);
    dispatch(addTask(response));
  }

  if (loading) {
    return 'loading';
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
