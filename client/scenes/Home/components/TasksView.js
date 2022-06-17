import React from 'react'
import PropTypes from 'prop-types'
import TaskList from '../../../components/TaskList'
import AddTaskForm from '../../../components/AddTaskForm'

export default function TasksView({ tasks }) {
  return (
    <div>
      <TaskList tasks={tasks} />
      <AddTaskForm />
    </div>
  )
}

TasksView.propTypes = {
  tasks: PropTypes.array.isRequired,
}
