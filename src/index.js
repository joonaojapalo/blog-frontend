import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker'

import rootReducer from './reducers'
import Root from './components/root'
import { requestAppInit } from './actions/app-init-actions'


/* browser history */
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

/* init redux store */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, middleware)
)


/* render root component */
const rootEl = document.getElementById('root')
console.log("root", Root);
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
