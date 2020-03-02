import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNewTask } from '../redux/reducer';

function AddTaskForm(props) {
  function onSubmit(evt) {
    evt.preventDefault();
    props.postNewTask(evt.target.taskName.value);
    evt.target.taskName.value = '';
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

AddTaskForm.propTypes = {
  postNewTask: PropTypes.func.isRequired,
};

const mapDispatch = { postNewTask };
export default connect(null, mapDispatch)(AddTaskForm);
