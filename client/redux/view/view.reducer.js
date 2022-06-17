import { VIEW_TYPE } from '../../constant'

const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'

export default function reducer(view = VIEW_TYPE.ALL_TASK, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW: {
      return action.view
    }
    default:
      return view
  }
}
