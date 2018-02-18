import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker'

import rootReducer from './reducers'
import Root from './components/root'
import { requestAppInit } from './actions/app-init-actions'

/* browser history */
const history = createHistory()

/* init middleware */
const router = routerMiddleware(history)

/* init redux store */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, router)
)

/* render root component */
const rootEl = document.getElementById('root')
ReactDOM.render(
  <Root store={store} history={history} />,
  rootEl
)

/* react-scripts worker */
registerServiceWorker()

const boostrap = () => {
  store.dispatch(requestAppInit())
}

/* boostrap app */
boostrap()
