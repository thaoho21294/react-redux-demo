import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNewTask } from '../redux/reducer';

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.postNewTask(evt.target.taskName.value);
    evt.target.taskName.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="taskName1">Add New To-Do</label>
          <input id="taskName1" name="taskName" placeholder="Enter new task" />
        </div>
        <button type="submit">Add</button>
      </form>);
  }
}
AddTaskForm.propTypes = {
  postNewTask: PropTypes.func.isRequired,
};

const mapDispatch = { postNewTask };
export default connect(null, mapDispatch)(AddTaskForm);
