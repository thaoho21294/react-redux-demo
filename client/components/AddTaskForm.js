import React, { useEffect, useReducer, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, InputGroup } from 'react-bootstrap'
import DatePicker from 'react-date-picker'

import { postTaskEffect } from '../redux/task/task.effect'
import Style from '../styles/home.module.scss'
import toWeekday from '../utils/toWeekday'

function AddTaskForm({ isShowForm = false }) {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    loading: false,
    error: null,
    isShowForm: isShowForm,
    taskDate: new Date(),
  })
  const dispatch = useDispatch()
  const inputEl = useRef(null)

  async function onSubmit(evt) {
    evt.preventDefault()
    const { taskNameInput } = evt.target.elements
    if (taskNameInput.value === '') {
      setState({ error: 'Please fill the name!' })
      return
    }
    const taskDateMilli = new Date(state.taskDate).getTime()
    await postTaskEffect(dispatch, setState, {
      title: taskNameInput.value,
      date: taskDateMilli,
      weekday: toWeekday(taskDateMilli),
    })
  }

  function onClickAddTask() {
    setState({ isShowForm: true })
  }

  function onClickCancel() {
    setState({ isShowForm: false, error: null })
  }

  function selectDate(date) {
    setState({ taskDate: date })
  }

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus()
    }
  }, [state.isShowForm])

  return (
    <div className={Style.marginTop5}>
      {!state.isShowForm && (
        <Button variant="outline-info" onClick={onClickAddTask}>
          <span>+</span> Add Task
        </Button>
      )}
      {state.isShowForm && (
        <Form onSubmit={onSubmit}>
          <InputGroup>
            <Form.Control
              id="taskNameInput"
              name="taskName"
              placeholder="ex: Learn Vue in 2 months"
              ref={inputEl}
            />
            <InputGroup.Append>
              <DatePicker
                onChange={selectDate}
                value={state.taskDate}
                format="MMM d"
              />
            </InputGroup.Append>
          </InputGroup>
          <Form.Group>
            <Button type="submit" variant="success">
              Add Task
            </Button>{' '}
            <Button variant="outline-secondary" onClick={onClickCancel}>
              Cancel
            </Button>
          </Form.Group>
        </Form>
      )}
      {state.error && <div className="text-danger">{state.error}</div>}
      {state.loading && <div className="text-info">loading...</div>}
    </div>
  )
}

export default React.memo(AddTaskForm)
