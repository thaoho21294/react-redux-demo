import React, { useState } from 'react'
import { Form, FormControl, Jumbotron, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useUserState, useUserDispatch } from './user.context'
import { updateUserEffect } from './user.effect'

export default function UserProfile() {
  const { user, error, loading } = useUserState()
  const dispatch = useUserDispatch()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [edit, setEdit] = useState(false)

  async function onSubmit(evt) {
    evt.preventDefault()
    await updateUserEffect(dispatch, { ...user, name, email })
    setEdit(false)
  }

  function onNameChange(event) {
    setName(event.target.value)
  }

  function onEmailChange(event) {
    setEmail(event.target.value)
  }

  function onClickEdit() {
    setEdit(true)
    setName(user.name)
    setEmail(user.email)
  }

  function onCLickCancel() {
    setEdit(false)
  }

  return (
    <Jumbotron>
      <Row>
        <Col xs={9}>
          <h3>User Info</h3>
        </Col>
        {!edit && (
          <Col xs={3}>
            <Button variant="light" onClick={onClickEdit}>
              <FontAwesomeIcon icon={['fas', 'pen']} /> Edit
            </Button>
          </Col>
        )}
      </Row>
      <Form onSubmit={onSubmit}>
        <Form.Group as={Row} controlId="formPlaintextName">
          <Form.Label column xs="2">
            Name
          </Form.Label>
          <Col xs="10">
            {!edit && (
              <Form.Control plaintext readOnly defaultValue={user.name} />
            )}
            {edit && (
              <FormControl type="text" value={name} onChange={onNameChange} />
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column xs="2">
            Email
          </Form.Label>
          <Col xs="10">
            {!edit && (
              <Form.Control plaintext readOnly defaultValue={user.email} />
            )}
            {edit && (
              <FormControl
                type="email"
                value={email}
                onChange={onEmailChange}
              />
            )}
          </Col>
        </Form.Group>
        {edit && (
          <Form.Group>
            <Button type="submit">Update</Button>{' '}
            <Button variant="outline-secondary" onClick={onCLickCancel}>
              Cancel
            </Button>
          </Form.Group>
        )}
      </Form>
      {error && <div className="text-danger">{error}</div>}
      {loading && <div className="text-info">loading...</div>}
    </Jumbotron>
  )
}
