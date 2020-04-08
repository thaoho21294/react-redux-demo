import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="#home" className="mr-auto">
        <FontAwesomeIcon icon={['fas', 'tasks']} />
        Todo App
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="success">Search</Button>
      </Form>
    </Navbar>
  );
}

export default CustomNavBar;
