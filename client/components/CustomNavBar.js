import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, InputGroup, FormControl, Button, Nav } from 'react-bootstrap';
import { useUserState } from '../scenes/User/user.context';

function CustomNavBar() {
  const { user: { name }, loading, error } = useUserState();
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/" className="mr-auto">
        <FontAwesomeIcon icon={['fas', 'tasks']} />
        Todo App
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/user">User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <InputGroup>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <InputGroup.Append>
            <Button variant="outline-secondary"><FontAwesomeIcon icon={['fas', 'search']} /></Button>
          </InputGroup.Append>
        </InputGroup>
      </Nav.Item>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Signed in as: {!loading && !error && <a href="#login">{ name }</a>}
          { error && <div className="text-danger">{error}</div> }
          { loading && <div className="text-info">loading...</div> }
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavBar;
