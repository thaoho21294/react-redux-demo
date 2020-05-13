import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useUserState } from '../scenes/Home';

function CustomNavBar() {
  const { name } = useUserState();
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="#home" className="mr-auto">
        <FontAwesomeIcon icon={['fas', 'tasks']} />
        Todo App
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
        <Navbar.Text>
          Signed in as: <a href="#login">{ name }</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavBar;
