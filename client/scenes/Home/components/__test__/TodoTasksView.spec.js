import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import React from 'react'

import { TASK_STATUS } from '../../../../constant'
import { render } from '../../../../__mocks__/test-utils'
import TodoTasksView from '../TodoTasksView'

describe('TodoTasksView', () => {
  test('show no task message if no task showed', () => {
    const noTaskMsg = /No todo tasks, Click/i
    const { getByText } = render(<TodoTasksView />, {
      initialState: {
        tasks: [],
      },
    })

    expect(getByText(noTaskMsg)).toBeInTheDocument()
  })

  test('show list of task if todo tasks have elements', () => {
    const tasks = [
      { id: '1', title: 'task1', status: TASK_STATUS.TODO },
      { id: '2', title: 'task2', status: TASK_STATUS.TODO },
    ]

    const { getByText } = render(<TodoTasksView />, {
      initialState: {
        tasks,
      },
    })

    expect(getByText(tasks[0].title)).toBeInTheDocument()
    expect(getByText(tasks[1].title)).toBeInTheDocument()
  })

  test('show add-task-form if user click here', () => {
    const { getByText, container, debug } = render(<TodoTasksView />, {
      initialState: {
        tasks: [],
      },
    })

    debug(container)

    fireEvent.click(getByText('here'))

    expect(getByText('Add Task')).toBeInTheDocument()
    expect(container.querySelector('form')).toBeInTheDocument()
  })
})
