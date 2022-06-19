import React from 'react'
import TaskList from '../TaskList'
import { TASK_STATUS } from '../../constant'
import { render, fireEvent, defaultStore } from '../../__mocks__/test-utils'
import { addTask } from '../../redux/task/task.actions'

describe('TaskList', () => {
  test('deleting a task reduce amount of tasks in store', () => {
    const tasks = [
      { id: '01', title: 'task 01', status: TASK_STATUS.TODO },
      { id: '02', title: 'task 02', status: TASK_STATUS.TODO },
    ]

    const { getByText, store } = render(<TaskList tasks={tasks} />, {
      initialState: {
        tasks,
      },
    })
    fireEvent.mouseEnter(getByText('task 01'))
    fireEvent.click(getByText('Delete'))
    fireEvent.click(getByText('OK'))

    expect(store.getState().tasks.length).toBe(1)
  })
})
