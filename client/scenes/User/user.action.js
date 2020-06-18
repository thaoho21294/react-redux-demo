export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_USER_ERROR = 'USER_ERROR';
export const SET_USER_LOADDING = 'USER_LOADING';

export const getUserAction = (user) => { return { type: GET_USER, user }; };
export const updateUserAction = (user) => { return { type: UPDATE_USER, user }; };
export const setUserErrorAction = (error) => { return { type: SET_USER_ERROR, error }; };
export const setUserLoadingAction = (loading) => { return { type: SET_USER_LOADDING, loading }; };
