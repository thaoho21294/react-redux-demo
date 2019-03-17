import axios from 'axios';

const GET_ALL_TASKS = 'GET_ALL_TASKS';
const POST_TASK = 'POST_TASK';
const CHANGE_STATUS = 'CHANGE_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const getTasks = (tasks) => { return { type: GET_ALL_TASKS, tasks }; };
const addTask = (task) => { return { type: POST_TASK, task }; };
const changeStatus = (task) => { return { type: CHANGE_STATUS, task }; };
const taskDelete = (slug) => { return { type: DELETE_TASK, slug }; };

const initial = {
  tasks: [],
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_TASKS: return { ...state, tasks: action.tasks };
    case POST_TASK: {
      const updateTasks = [...state.tasks];
      updateTasks.push(action.task);
      return { state, tasks: updateTasks};
    }
    case CHANGE_STATUS: {
      const newArr = state.tasks.map((task) => {
        if (task.slug === action.task.slug) task.metafields[0].value = !task.metafields[0].value;
        return task;
      });
      return { ...state, tasks: newArr };
    }
    case DELETE_TASK: {
      const arr = state.tasks.filter((task) => {
        return !(task.slug === action.slug);
      });
      return { ...state, tasks: arr };
    }
    default:
      return state;
  }
};

export default reducer;


export const getAllTasks = () => {
  return (dispatch) => {
    dispatch(getTasks([
      { id: 't01', title: 'task 1', metafields: [{ value: false }], slug: 'task1' },
      { id: 't02', title: 'task 2', metafields: [{ value: true }], slug: 'task2' },
      { id: 't03', title: 'task 3', metafields: [{ value: false }], slug: 'task3' }
    ]))
  }
};

const formatSlug = (title) => {
  const lower = title.toLowerCase();
  return lower.split(' ').join('-');
};

export const postNewTask = (title) => {
  return (dispatch) => {
    const newId = generateId();
    dispatch(addTask({ id: newId, title, metafields: [{ value: false }], slug: formatSlug(title) }));
  };
};

export const putChangeStatus = (task, bool) => (dispatch) => {
  dispatch(changeStatus(task));
};

export const deleteTask = (slug) => {
  return (dispatch) => {
    dispatch(taskDelete(slug));
  }
};

const generateId = () => {
  return Math.random().toString(36).substring(7);
}