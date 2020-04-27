import { combineReducers } from 'redux';
import tasks from './taskListReducer';
import view from './viewReducer';

export default combineReducers({
  tasks,
  view,
});
