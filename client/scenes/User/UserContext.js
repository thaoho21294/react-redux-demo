import React from 'react';

const UserContext = React.createContext();
const UserDispatchContext = React.createContext();
const defaultUser = { id: 'u00001', name: 'John', email: 'john@gmail.com' };

function userReducer(state, action) {
  switch (action.type) {
    case 'get': {
      return state;
    }
    case 'update': {
      return { ...state, ...action.user };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useUserState() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }

  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }

  return context;
}

export {
  UserContext,
  UserDispatchContext,
  defaultUser,
  userReducer,
  useUserState,
  useUserDispatch,
};
