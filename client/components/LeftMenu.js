import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentView } from '../redux/reducer';
import { VIEW_TYPE } from '../constant';

class LeftMenu extends Component {
  openAllTasks = () => {
    this.props.setCurrentView(VIEW_TYPE.ALL_TASK);
  }

  openCompletedTasks = () => {
    this.props.setCurrentView(VIEW_TYPE.COMPLETED_TASK);
  }

  openTodoTasks = () => {
    this.props.setCurrentView(VIEW_TYPE.TODO_TASK);
  }

  render() {
    return (
      <ListGroup>
        <ListGroup.Item action onClick={this.openAllTasks}>All tasks</ListGroup.Item>
        <ListGroup.Item action onClick={this.openCompletedTasks}>Completed Tasks</ListGroup.Item>
        <ListGroup.Item action onClick={this.openTodoTasks}>Todo Tasks</ListGroup.Item>
        <ListGroup.Item action>Project</ListGroup.Item>
        <ListGroup.Item action>Archived Project</ListGroup.Item>
      </ListGroup>
    );
  }
}

LeftMenu.propTypes = {
  setCurrentView: PropTypes.func.isRequired,
};

const mapDispatch = { setCurrentView };

export default connect(null, mapDispatch)(LeftMenu);
