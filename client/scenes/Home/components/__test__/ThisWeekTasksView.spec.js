import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../../__mocks__/test-utils';
import { weekdays, TASK_STATUS } from '../../../../constant';
import ThisWeekTasksView from '../ThisWeekTasksView';

test('should render 7 days with conrresponding tasks', () => {
  const tasks = {
    Saturday: [{ id: '1', title: 'task 1', status: TASK_STATUS.TODO, date: 1592586000555, weekday: 'Saturday' }],
    Thursday: [{ id: '2', title: 'task 2', status: TASK_STATUS.TODO, date: 1593018000000, weekday: 'Thursday' },
      { id: '2', title: 'task 3', status: TASK_STATUS.TODO, date: 1592800868635, weekday: 'Thursday' }],
  };
  const { getByText } = render(<ThisWeekTasksView tasks={tasks} />);

  weekdays.forEach((day) => {
    expect(getByText(day)).toBeInTheDocument();
  });
  expect(getByText('task 1')).toBeInTheDocument();
  expect(getByText('task 2')).toBeInTheDocument();
  expect(getByText('task 3')).toBeInTheDocument();
});
