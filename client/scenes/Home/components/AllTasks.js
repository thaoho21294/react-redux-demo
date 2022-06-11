import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import TasksView from './TasksView';
import { tasksSelector } from '../../../redux/task/task.selector';
import useDebounce from '../../../hooks/useDebounce';

const AllTasks = () => {
  const tasks = useSelector(tasksSelector);
  const [filterTasks, setFilterTasks] = useState(tasks);
  const inputEl = useRef();
  const debounce = useDebounce();

  const onSearch = (evt) => {
    const value = evt.target.value;
    if (value === '') {
      setFilterTasks(tasks);
      return;
    }
    debounce(() => setFilterTasks(tasks.filter(v => v.title.includes(value))))();
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onSearch} ref={inputEl} />
      <TasksView tasks={filterTasks} />
    </div>
  );
};

export default AllTasks;
