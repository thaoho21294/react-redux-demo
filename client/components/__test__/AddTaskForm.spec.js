import React from 'react'
import fetchMock from 'fetch-mock'

import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '../../__mocks__/test-utils'
import AddTaskFrom from '../AddTaskForm'
import { uri } from '../../services/task.service'
import { TASK_STATUS } from '../../constant'

test('allow user to add task successfully', async () => {
  fetchMock.mock(uri, {
    status: 201,
    body: { id: '11', title: 'new task', status: TASK_STATUS.TODO },
  })

  const { getByPlaceholderText, getByText, store } = render(<AddTaskFrom />)
  fireEvent.click(getByText(/Add Task/i))

  fireEvent.change(getByPlaceholderText('ex: Learn Vue in 2 months'), {
    target: { value: 'new task' },
  })
  fireEvent.click(getByText('Add Task'))

  await waitForElementToBeRemoved(() => getByText(/loading/i))

  expect(store.getState().tasks.length).toBe(1)
})
