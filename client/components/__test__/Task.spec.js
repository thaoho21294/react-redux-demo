import React from 'react'
import fetchMock from 'fetch-mock'
import '@testing-library/jest-dom/extend-expect'

import { TASK_STATUS } from '../../constant'
import Task from '../Task'
import { url } from '../../services/task.service'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '../../__mocks__/test-utils'

describe('Task', () => {
  test('completing a task should update store', async () => {
    const task = {
      id: 'task01',
      title: 'a task name',
      status: TASK_STATUS.TODO,
    }
    const handleDeleteModalOpen = jest.fn()
    fetchMock.mock(
      { url: `${url}/${task.id}`, method: 'PUT' },
      {
        status: 200,
        body: {
          id: 'task01',
          title: 'a task name',
          status: TASK_STATUS.COMPLETED,
        },
      },
    )

    const { getByText, store } = render(
      <Task task={task} handleDeleteModalOpen={handleDeleteModalOpen} />,
      {
        initialState: {
          tasks: [task],
        },
      },
    )
    fireEvent.mouseEnter(getByText('a task name'))
    fireEvent.click(getByText('Complete'))
    await waitForElementToBeRemoved(() => getByText(/loading/i))

    expect(store.getState().tasks.length).toBe(1)
    expect(store.getState().tasks[0].status).toBe(TASK_STATUS.COMPLETED)
  })

  test('completing a task should change UI to completed view', () => {
    const task = {
      id: 'task01',
      title: 'a task name',
      status: TASK_STATUS.COMPLETED,
    }
    const handleDeleteModalOpen = jest.fn()

    const { getByText } = render(
      <Task task={task} handleDeleteModalOpen={handleDeleteModalOpen} />,
    )
    fireEvent.mouseEnter(getByText('a task name'))

    expect(getByText('Undo')).toBeInTheDocument()
    expect(getByText('a task name')).toHaveClass('lineThrough')
  })
})
