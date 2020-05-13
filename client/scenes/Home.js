import React from 'react';
import classnames from 'classnames';

import LefMenu from '../components/LeftMenu';
import CustomNavBar from '../components/CustomNavBar';
import Style from '../styles/home.module.scss';
import MainView from './MainView';
import ErrorBoundary from '../components/ErrorBoundary';

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

export default function Home() {
  const [state, dispatch] = React.useReducer(userReducer, defaultUser);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <CustomNavBar />
        <div className={classnames(Style.content, 'container')}>
          <LefMenu />
          <div className={Style.tasks}>
            <ErrorBoundary>
              <MainView />
            </ErrorBoundary>
          </div>
        </div>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
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

export { useUserState, useUserDispatch };
