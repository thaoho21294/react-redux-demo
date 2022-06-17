import { combineReducers } from 'redux'
import tasks from './task/task.reducer'
import view from './view/view.reducer'

export default combineReducers({
  tasks,
  view,
})
