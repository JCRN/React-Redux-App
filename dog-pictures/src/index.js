import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
