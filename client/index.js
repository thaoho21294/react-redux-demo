import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './scenes/Home';
import store from './redux/store';

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
