import React, { useCallback, useMemo, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AddTaskForm from '../../../components/AddTaskForm'
import { todoTasksSelector } from '../../../redux/task/task.selector'

export default function TodoTasksView() {
  const tasks = useSelector(todoTasksSelector)
  const [showAddForm, setShowAddForm] = useState(false)
  function onClickCreate() {
    setShowAddForm(true)
  }

  return (
    <div>
      {tasks.length === 0 && (
        <Alert variant="success">
          No todo tasks, Click
          <Alert.Link onClick={onClickCreate}> here</Alert.Link> to create!
        </Alert>
      )}
      {showAddForm && <AddTaskForm isShowForm={true} />}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}
