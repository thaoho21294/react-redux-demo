import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './scenes/About/About';
import User from './scenes/User/UserProfile';
import Home from './scenes/Home/Home';
import CustomNavBar from './components/CustomNavBar';
import { UserContext, UserDispatchContext } from './scenes/User/user.context';
import { userReducer, defaultUserState } from './scenes/User/user.reducer';
import { getUserEffect } from './scenes/User/user.effect';

export default function App() {
  const [state, dispatch] = React.useReducer(userReducer, defaultUserState);

  useEffect(() => {
    getUserEffect(dispatch);
  }, []);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <Router>
          <div>
            <CustomNavBar />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/user">
                <User />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
