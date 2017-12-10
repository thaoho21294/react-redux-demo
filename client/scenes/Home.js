import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { getAllTasks } from '../redux/reducer';
import Task from '../components/Task';
import AddTaskForm from '../components/AddTaskForm';
import LefMenu from '../components/LeftMenu';

class Home extends Component {
  componentDidMount() {
    getAllTasks();
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
              <h3>Let's get some work done!</h3>
              <div className="container">
                {
                  this.props.tasks && this.props.tasks.map((task) => {
                    return (
                      <Task key={task._id} Obj={task} isComplete={task.metafields[0].value} name={task.title} />
                    );
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapState = ({ tasks }) => ({ tasks });
const mapDispatch = { getAllTasks };
export default connect(mapState, mapDispatch)(Home);
