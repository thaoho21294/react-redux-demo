import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App'
import store from './redux/store'

library.add(fab, fas)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
