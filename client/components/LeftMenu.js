import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentView } from '../redux/reducer';
import { VIEW_TYPE, TILE_TYPE } from '../constant';

function LeftMenu(props) {
  const [title, setTitle] = useState(TILE_TYPE.ALL_TASK);

  function openAllTasks() {
    props.setCurrentView(VIEW_TYPE.ALL_TASK);
    setTitle(TILE_TYPE.ALL_TASK);
  }

  function openCompletedTasks() {
    props.setCurrentView(VIEW_TYPE.COMPLETED_TASK);
    setTitle(TILE_TYPE.COMPLETED_TASK);
  }

  function openTodoTasks() {
    props.setCurrentView(VIEW_TYPE.TODO_TASK);
    setTitle(TILE_TYPE.TODO_TASK);
  }

  useEffect(() => {
    document.title = title;
  });

  return (
    <ListGroup>
      <ListGroup.Item action onClick={openAllTasks}>All tasks</ListGroup.Item>
      <ListGroup.Item action onClick={openCompletedTasks}>Completed Tasks</ListGroup.Item>
      <ListGroup.Item action onClick={openTodoTasks}>Todo Tasks</ListGroup.Item>
      <ListGroup.Item action>Project</ListGroup.Item>
      <ListGroup.Item action>Archived Project</ListGroup.Item>
    </ListGroup>
  );
}

LeftMenu.propTypes = {
  setCurrentView: PropTypes.func.isRequired,
};

const mapDispatch = { setCurrentView };

export default connect(null, mapDispatch)(LeftMenu);
