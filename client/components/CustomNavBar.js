import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

// eslint-disable-next-line
class CustomNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default CustomNavBar;
