import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import TodoTasksView from '../TodoTasksView';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

test('show no task message if no task showed', () => {
  const noTaskMsg = /No todo tasks, Click/i;
  const { getByText } = render(<TodoTasksView tasks={[]} />);

  expect(getByText(noTaskMsg)).toBeInTheDocument();
});

test('show list of task if todo tasks have elements', () => {
  const tasks = [
    { id: '1', title: 'task1' },
    { id: '2', title: 'task2' },
  ];

  const { getByText } = render(<TodoTasksView tasks={tasks} />);

  expect(getByText(tasks[0].title)).toBeInTheDocument();
  expect(getByText(tasks[1].title)).toBeInTheDocument();
});

test('show add-task-form if user click here', () => {
  const { getByText } = render(<TodoTasksView tasks={[]} />);

  fireEvent.click(getByText('here'));

  expect(getByText('Add New To-Do')).toBeInTheDocument();
  const form = getByText((content, element) => {
    return element.tagName.toLowerCase() === 'form';
  });
  expect(form).toBeInTheDocument();
});
