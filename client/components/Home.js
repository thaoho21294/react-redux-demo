import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTasks } from '../redux/reducer';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class Home extends Component {
  componentDidMount() {
    getAllTasks();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Cosmic To-Do App!!</h1>
          <AddTaskForm />
        </div>
        <h3>Let's get some work done!</h3>
        <div className="container">
          {
            this.props.tasks && this.props.tasks.map((task) => {
              return (
                <Task key={task._id} Obj={task} isComplete={task.metafields[0].value} name={task.title} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapState = ({ tasks }) => ({ tasks });
const mapDispatch = { getAllTasks };
export default connect(mapState, mapDispatch)(Home);
