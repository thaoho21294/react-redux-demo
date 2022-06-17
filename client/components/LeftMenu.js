import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCurrentView } from '../redux/task/task.actions'
import { VIEW_TYPE, TILE_TYPE } from '../constant'

function LeftMenu() {
  const dispatch = useDispatch()

  function setTitle(title) {
    document.title = title
  }

  function openAllTasks() {
    dispatch(setCurrentView(VIEW_TYPE.ALL_TASK))
    setTitle(TILE_TYPE.ALL_TASK)
  }

  function openCompletedTasks() {
    dispatch(setCurrentView(VIEW_TYPE.COMPLETED_TASK))
    setTitle(TILE_TYPE.COMPLETED_TASK)
  }

  function openTodoTasks() {
    dispatch(setCurrentView(VIEW_TYPE.TODO_TASK))
    setTitle(TILE_TYPE.TODO_TASK)
  }

  function openTodayTask() {
    dispatch(setCurrentView(VIEW_TYPE.TODAY_TASK))
    setTitle(TILE_TYPE.TODAY_TASK)
  }

  function openTomorrowTask() {
    dispatch(setCurrentView(VIEW_TYPE.TOMORROW_TASK))
    setTitle(TILE_TYPE.TOMORROW_TASK)
  }

  function openThisWeekTask() {
    dispatch(setCurrentView(VIEW_TYPE.THIS_WEEK_TASK))
    setTitle(TILE_TYPE.THIS_WEEK_TASK)
  }

  return (
    <ListGroup>
      <ListGroup.Item action onClick={openAllTasks}>
        All tasks
      </ListGroup.Item>
      <ListGroup.Item action onClick={openTodayTask}>
        Today
      </ListGroup.Item>
      <ListGroup.Item action onClick={openTomorrowTask}>
        Tomorow
      </ListGroup.Item>
      <ListGroup.Item action onClick={openThisWeekTask}>
        This week
      </ListGroup.Item>
      <ListGroup.Item action onClick={openCompletedTasks}>
        Completed Tasks
      </ListGroup.Item>
      <ListGroup.Item action onClick={openTodoTasks}>
        Todo Tasks
      </ListGroup.Item>
    </ListGroup>
  )
}

export default React.memo(LeftMenu)
