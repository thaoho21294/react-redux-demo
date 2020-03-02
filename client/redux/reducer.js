const GET_ALL_TASKS = 'GET_ALL_TASKS';
const POST_TASK = 'POST_TASK';
const CHANGE_STATUS = 'CHANGE_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';
const getTasks = (tasks) => { return { type: GET_ALL_TASKS, tasks }; };
const addTask = (task) => { return { type: POST_TASK, task }; };
const changeStatus = (task) => { return { type: CHANGE_STATUS, task }; };
const taskDelete = (slug) => { return { type: DELETE_TASK, slug }; };
const setCurrentViewAction = (view) => { return { type: SET_CURRENT_VIEW, view }; };

const initial = {
  tasks: [],
  view: 'ALL_TASK',
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_TASKS: return { ...state, tasks: action.tasks };
    case POST_TASK: {
      const updateTasks = [...state.tasks];
      updateTasks.push(action.task);
      return { state, tasks: updateTasks };
    }
    case CHANGE_STATUS: {
      const newArr = state.tasks.map((task) => {
        if (task.id === action.task.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      return { ...state, tasks: newArr };
    }
    case DELETE_TASK: {
      const arr = state.tasks.filter((task) => {
        return !(task.id === action.id);
      });
      return { ...state, tasks: arr };
    }
    case SET_CURRENT_VIEW : {
      return { ...state, view: action.view };
    }
    default:
      return state;
  }
};

export default reducer;


export const getAllTasks = () => {
  return (dispatch) => {
    dispatch(getTasks([
      { id: 't01', title: 'task 1', isCompleted: false },
      { id: 't02', title: 'task 2', isCompleted: true },
      { id: 't03', title: 'task 3', isCompleted: false },
    ]));
  };
};

export const getAllTasksError = () => {
  return (dispatch) => {
    dispatch(getTasks([
      { id: 't01', title: 'task 1', isCompleted: false },
      { id: 't02', title: 'task 2', isCompleted: true },
      undefined]));
  };
};

const generateId = () => {
  return Math.random().toString(36).substring(7);
};

export const postNewTask = (title) => {
  return (dispatch) => {
    const newId = generateId();
    dispatch(
      addTask({ id: newId, title, isCompleted: false }));
  };
};

export const putChangeStatus = (task) => {
  return (dispatch) => {
    dispatch(changeStatus(task));
  };
};

export const deleteTask = (slug) => {
  return (dispatch) => {
    dispatch(taskDelete(slug));
  };
};

export const setCurrentView = (view) => {
  return (dispatch) => {
    dispatch(setCurrentViewAction(view));
  };
};
