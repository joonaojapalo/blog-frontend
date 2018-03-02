import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import appState from './app-state'
import user from './user'
import posts from './posts'
import postEditor from './post-editor'
import postViewer from './post-viewer'

const rootReducer = combineReducers({
  form: formReducer, // must be mounted to property 'form'
  router: routerReducer, // react-redux-router
  appState,
  user,
  posts,
  postEditor,
  postViewer
})

export default rootReducer
