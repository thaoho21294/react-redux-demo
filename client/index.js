import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Home from './scenes/Home';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.css'

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
