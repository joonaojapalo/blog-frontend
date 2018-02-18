import * as types from '../constants/action-types'
import { requestReadPosts } from './post-actions'

/**
 * Action creators
 */
export const appInitStart = () => ({type: types.APP_INIT_START})
export const appInitSuccess = () => ({type: types.APP_INIT_SUCCESS})
export const appInitError = () => ({type: types.APP_INIT_ERROR})

/***
 * Thunk actions (side-effects)
 */
export function requestAppInit () {
  return function (dispatch) {
    dispatch(appInitStart())

    // all requests in app init
    let promises = [
      dispatch(requestReadPosts('JoonaO'))
    ]

    // wait for all promises
    Promise.all(...promises)
      .then(() => dispatch(appInitSuccess()))
      .catch(() => dispatch(appInitError()))
  }
}
