import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { getAllTasks } from '../redux/reducer';
// import Task from '../components/Task';
// import AddTaskForm from '../components/AddTaskForm';
// import LefMenu from '../components/LeftMenu';

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
              LefMenu
            </Col>
            <Col xs="6">
              abc ddddd
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
