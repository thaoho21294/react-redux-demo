import React, { Component, PropTypes } from 'react';
import Task from '../components/Task';

class TaskList extends Component {
  render() {
    const { tasks } = this.props;
    return <div>
        {tasks.map(task =>
          <Task key={task.id} Obj={task} isComplete={task.metafields[0].value} name={task.title} />)}
      </div>
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
