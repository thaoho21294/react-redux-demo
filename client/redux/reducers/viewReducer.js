import { VIEW_TYPE } from '../../constant';

const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

const initState = {
  currentView: VIEW_TYPE.ALL_TASK,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW : {
      return { ...state, currentView: action.view };
    }
    default: return state;
  }
}
