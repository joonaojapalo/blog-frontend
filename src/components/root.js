import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import App from '../containers/app'
import '../index.css'
import 'simple-grid/css/grid.css'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={App}>
        <Route path='author' component={App} />
        <Route path='post/:postId' component={App} />
      </Route>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
