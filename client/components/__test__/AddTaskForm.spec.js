import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import fetchMock from 'fetch-mock';

import { render, fireEvent, waitForElementToBeRemoved, defaultStore } from '../../__mocks__/test-utils';
import AddTaskFrom from '../AddTaskForm';
import { uri } from '../../service/tasksService';
import { TASK_STATUS } from '../../constant';

test('allow user to add task successfully', async () => {
  fetchMock.mock(uri, { status: 201, body: { id: '11', title: 'new task', status: TASK_STATUS.TODO } });

  const { getByLabelText, getByText } = render(<AddTaskFrom />);

  fireEvent.change(getByLabelText('Add New To-Do'), { target: { value: 'new task' } });
  fireEvent.click(getByText('Add'));

  await waitForElementToBeRemoved(() => getByText(/loading/i));

  expect(defaultStore.getState().tasks.length).toBe(1);
});
