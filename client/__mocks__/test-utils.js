import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../redux/combineReducers'

export const defaultStore = createStore(reducer)

function render(ui, { initialState, ...renderOptions } = {}) {
  // eslint-disable-next-line react/prop-types
  const store = createStore(reducer, initialState)
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  const renderUtils = rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
  return { ...renderUtils, store }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
