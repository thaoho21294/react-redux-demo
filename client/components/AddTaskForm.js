import React, { Component } from 'react';
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
        <label for="exampleInputEmail1">Add New To-Do</label>
        <input name="taskName" placeholder="Enter new task" />
        </div>
        <button type="submit">Add</button>
    </form>)
  }
}
const mapDispatch = { postNewTask };
export default connect(null, mapDispatch)(AddTaskForm);
