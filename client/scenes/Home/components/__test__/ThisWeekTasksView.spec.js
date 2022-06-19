import React from 'react'
import { within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MockDate from 'mockdate'
import { render } from '../../../../__mocks__/test-utils'
import { TASK_STATUS } from '../../../../constant'
import ThisWeekTasksView from '../ThisWeekTasksView'

describe('ThisWeekTasksView', () => {
  beforeAll(() => {
    MockDate.set(1655533232)
  })

  afterAll(() => {
    MockDate.reset()
  })
  test('should render tasks that are categorized by week days', () => {
    const tasks = [
      {
        id: '1',
        title: 'task 1',
        status: TASK_STATUS.TODO,
        date: 1655533232,
        weekday: 'Saturday',
      },
      {
        id: '2',
        title: 'task 2',
        status: TASK_STATUS.TODO,
        date: 1655359747,
        weekday: 'Thursday',
      },
      {
        id: '3',
        title: 'task 3',
        status: TASK_STATUS.TODO,
        date: 1655360000,
        weekday: 'Thursday',
      },
    ]

    const { container } = render(<ThisWeekTasksView />, {
      initialState: {
        tasks,
      },
    })

    const tasksByWeekday = container.querySelectorAll('td')

    expect(within(tasksByWeekday[3]).getByText('task 2')).toBeInTheDocument()
    expect(within(tasksByWeekday[3]).getByText('task 3')).toBeInTheDocument()

    expect(within(tasksByWeekday[5]).getByText('task 1')).toBeInTheDocument()
  })
})
