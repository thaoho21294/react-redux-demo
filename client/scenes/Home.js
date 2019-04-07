import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllTasks } from '../redux/reducer';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import LefMenu from '../components/LeftMenu';
import CustomNavBar from '../components/CustomNavBar';
import Style from '../styles/mainSheet/main.scss';

class Home extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }
  render() {
    return (
      <div>
        <CustomNavBar />
        <div className={Style.content}>
          <LefMenu />
          <div className="container">
            <h1>To-Do App!!</h1>
            <AddTaskForm />
            <TaskList tasks={this.props.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  tasks: PropTypes.array.isRequired,
  getAllTasks: PropTypes.func.isRequired,
};

const mapState = ({ tasks }) => ({ tasks });
const mapDispatch = { getAllTasks };
export default connect(mapState, mapDispatch)(Home);
