import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { weekdays } from '../../../constant';

export default function ThisWeekTasksView({ tasks }) {
  console.log(tasks);
  return (
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
                  return <li key={task.id}>{task.title}</li>;
                })}
              </ul>
            </td>);
          })}
        </tr>
      </tbody>
    </Table>
  );
}

ThisWeekTasksView.propTypes = {
  tasks: PropTypes.object.isRequired,
};
