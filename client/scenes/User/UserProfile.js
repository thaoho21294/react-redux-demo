import React from 'react';
import { Form, FormControl, Jumbotron } from 'react-bootstrap';
import { useUserState } from './UserContext';


export default function UserProfile() {
  const { name, email } = useUserState();
  return (<Jumbotron>
    <h3>User Info</h3>
    <Form>
      <label htmlFor="username">Name: </label>
      <FormControl type="text" placeholder="Search" id="username" value={name} />
      <label htmlFor="email">Email: </label>
      <FormControl type="text" placeholder="Search" id="email" value={email} />
    </Form>
  </Jumbotron>);
}
