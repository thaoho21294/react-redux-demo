import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Home from './scenes/Home';
import store from './redux/store';
import './styles/app.scss';

library.add(fab, fas);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
