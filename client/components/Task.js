import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { putChangeStatus, deleteTask } from '../redux/reducer';

class Task extends Component {
  onComplete() {
    const { Obj, isComplete } = this.props;
    this.props.putChangeStatus(Obj, isComplete);
  }

  onDelete() {
    const { Obj: { slug } } = this.props;
    this.props.deleteTask(slug);
  }

  render() {
    return (
      <div className="row">
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button type="button" onClick={this.onComplete} className="btn" color="primary">
            {this.props.isComplete ? 'Undo' : 'Complete' }
          </Button>
          <Button type="button" onClick={this.onDelete} className="btn" color="danger">
            Delete
          </Button>
        </div>
        <h3 style={{ textDecoration: this.props.isComplete ? 'line-through' : 'none' }}>{this.props.name}</h3>
      </div>
    );
  }
}

Task.propTypes = {
  Obj: PropTypes.object.isRequired,
  isComplete: PropTypes.bool.isRequired,
  putChangeStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapDispatch = { putChangeStatus, deleteTask };
export default connect(null, mapDispatch)(Task);
