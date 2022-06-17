import {
  GET_USER,
  UPDATE_USER,
  SET_USER_ERROR,
  SET_USER_LOADDING,
} from './user.action'

const defaultUserState = {
  user: {},
  loading: true,
  error: null,
}

function userReducer(state, action) {
  switch (action.type) {
    case GET_USER: {
      return { ...state, user: action.user, loading: false }
    }
    case UPDATE_USER: {
      const updateState = {
        ...state,
        user: { ...state.user, ...action.user },
        loading: false,
      }
      return updateState
    }
    case SET_USER_ERROR: {
      return { ...state, error: state.error, loading: false }
    }
    case SET_USER_LOADDING: {
      return { ...state, loading: action.loading }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export { defaultUserState, userReducer }
