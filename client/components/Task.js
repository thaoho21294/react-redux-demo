import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { putChangeStatus, deleteTask } from '../redux/reducer';

const Task = (props) => {
  return (
    <div className="row">
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button
          type="button"
          onClick={() => {
            props.putChangeStatus(props.Obj, props.isComplete)
          }}
          className="btn"
          color="primary"
        >
          {props.isComplete ? 'Undo' : 'Complete' }
        </Button>
        <Button type="button" onClick={() => { props.deleteTask(props.Obj.slug); }} className="btn" color="danger">Delete</Button>
      </div>
      <h3 style={{ textDecoration: props.isComplete ? 'line-through' : 'none' }}>{props.name}</h3>
    </div>
  );
};

const mapDispatch = { putChangeStatus, deleteTask };
export default connect(null, mapDispatch)(Task);
