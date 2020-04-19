import { combineReducers } from 'redux';
import taskList from './taskListReducer';
import view from './viewReducer';

export default combineReducers({
  taskList,
  view,
});
