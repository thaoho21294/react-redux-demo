import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { getAllTasks } from '../redux/reducer';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import LefMenu from '../components/LeftMenu';

class Home extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">
              <LefMenu />
            </Col>
            <Col xs="6">
              <div className="container">
                <h1>Cosmic To-Do App!!</h1>
                <AddTaskForm />
              </div>
              <h3>Lets get some work done!</h3>
              <div className="container">
                <TaskList tasks={this.props.tasks} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  tasks: PropTypes.array.isRequired,
  getAllTasks: PropTypes.func.isRequired
};

const mapState = ({ tasks }) => ({ tasks });
const mapDispatch = { getAllTasks };
export default connect(mapState, mapDispatch)(Home);
