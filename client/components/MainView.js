import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllTasks } from '../redux/reducer';
import { VIEW_TYPE } from '../constant';
import TaskView from '../components/TaskView';
import CompletedTaskList from '../components/CompletedTaskList';


class MainView extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }
  render() {
    const { tasks } = this.props;
    switch (this.props.view) {
      case VIEW_TYPE.ALL_TASK: return <TaskView tasks={tasks} />;
      case VIEW_TYPE.COMPLETED_TASK: {
        const completedTasks = tasks.filter(task => task.isCompleted);
        return <CompletedTaskList tasks={completedTasks} />;
      }
      default: return '';
    }
  }
}

MainView.propTypes = {
  view: PropTypes.string,
  tasks: PropTypes.array.isRequired,
  getAllTasks: PropTypes.func.isRequired,
};

MainView.defaultProps = {
  view: VIEW_TYPE.ALL_TASK,
};

const mapState = ({ tasks, view }) => ({ tasks, view });
const mapDispatch = { getAllTasks };
export default connect(mapState, mapDispatch)(MainView);
