import React from 'react'
import TaskList from '../TaskList'
import { TASK_STATUS } from '../../constant'
import { render, fireEvent, defaultStore } from '../../__mocks__/test-utils'
import { addTask } from '../../redux/task/task.actions'

test('deleting a task reduce amount of tasks in store', () => {
  const tasks = [
    { id: '01', title: 'task 01', status: TASK_STATUS.TODO },
    { id: '02', title: 'task 02', status: TASK_STATUS.TODO },
  ]
  defaultStore.dispatch(addTask(tasks[0]))
  defaultStore.dispatch(addTask(tasks[1]))

  const { getByText } = render(<TaskList tasks={tasks} />)
  fireEvent.mouseEnter(getByText('task 01'))
  fireEvent.click(getByText('Delete'))
  fireEvent.click(getByText('OK'))

  expect(defaultStore.getState().tasks.length).toBe(1)
})
