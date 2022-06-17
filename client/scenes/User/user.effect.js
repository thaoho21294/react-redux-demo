import { getUserApi, putUserApi } from './user.service'
import {
  getUserAction,
  updateUserAction,
  setUserErrorAction,
  setUserLoadingAction,
} from './user.action'

export async function getUserEffect(dispatch) {
  try {
    const response = await getUserApi()
    const json = await response.json()
    dispatch(getUserAction(json))
  } catch (e) {
    dispatch(setUserErrorAction(e || 'Unexpected Error!!!'))
  }
}

export async function updateUserEffect(dispatch, user) {
  dispatch(setUserLoadingAction(true))
  try {
    await putUserApi(user)
    dispatch(updateUserAction(user))
  } catch (e) {
    dispatch(setUserErrorAction(e || 'Unexpected Error!!!'))
  }
}
