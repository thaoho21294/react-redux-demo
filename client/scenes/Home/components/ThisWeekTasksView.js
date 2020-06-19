import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { weekdays, TASK_STATUS } from '../../../constant';
import AddTaskForm from '../../../components/AddTaskForm';
import Style from '../../../styles/home.module.scss';

export default function ThisWeekTasksView({ tasks }) {
  const isCompleted = task => task.status === TASK_STATUS.COMPLETED;

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            {weekdays.map((day) => { return <th key={day}>{day}</th>; })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weekdays.map((day) => {
              return (<td key={`td-${day}`}>
                <ul>
                  {(tasks[day] || []).map((task) => {
                    return <li key={task.id} className={isCompleted(task) ? Style.lineThrough : ''}>{task.title}</li>;
                  })}
                </ul>
              </td>);
            })}
          </tr>
        </tbody>
      </Table>
      <AddTaskForm />
    </div>
  );
}

ThisWeekTasksView.propTypes = {
  tasks: PropTypes.object.isRequired,
};
