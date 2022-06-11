import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import TasksView from './TasksView';
import { tasksSelector } from '../../../redux/task/task.selector';

const AllTasks = () => {
  const tasks = useSelector(tasksSelector);
  const inputEl = useRef();
  const [searchText, setSearchText] = useState('');
  const filteredTasks = useMemo(() => {
    if (!searchText) {
      return tasks;
    }
    return tasks.filter(v => v.title.includes(searchText));
  }, [tasks, searchText]);


  const onSearch = (evt) => {
    setSearchText(evt.target.value);
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onSearch} ref={inputEl} />
      <TasksView tasks={filteredTasks} />
    </div>
  );
};

export default AllTasks;
