import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './scenes/About/About';
import User from './scenes/User/UserProfile';
import Home from './scenes/Home/Home';
import CustomNavBar from './components/CustomNavBar';
import { UserContext, UserDispatchContext, userReducer, defaultUser } from './scenes/User/UserContext';

export default function App() {
  const [state, dispatch] = React.useReducer(userReducer, defaultUser);
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
