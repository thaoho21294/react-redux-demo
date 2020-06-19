import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import fetchMock from 'fetch-mock';

import { TASK_STATUS } from '../../constant';
import Task from '../Task';
import { url } from '../../service/tasksService';
import { render, fireEvent, waitForElementToBeRemoved, defaultStore } from '../../__mocks__/test-utils';
import { addTask } from '../../redux/actions';

test('completing a task work correctly', async () => {
  const task = { id: 'task01', title: 'a task name', status: TASK_STATUS.TODO };
  defaultStore.dispatch(addTask(task));
  const handleDeleteModalOpen = jest.fn();
  fetchMock.mock({ url: `${url}/${task.id}`, method: 'PUT' }, { status: 200, body: { id: 'task01', title: 'a task name', status: TASK_STATUS.COMPLETED } });

  const { getByText } = render(<Task task={task} handleDeleteModalOpen={handleDeleteModalOpen} />);
  fireEvent.mouseEnter(getByText('a task name'));
  fireEvent.click(getByText('Complete'));

  await waitForElementToBeRemoved(() => getByText(/loading/i));

  expect(defaultStore.getState().tasks.length).toBe(1);
  expect(defaultStore.getState().tasks[0].status).toBe(TASK_STATUS.COMPLETED);
  // expect(getByText('Undo')).toBeInTheDocument();
  // expect(getByText('a task name')).toHaveClass('line-through');
});
