import config from '../config'
import Api from '../service/api-client'
import * as types from '../constants/action-types'


/**
 * Action creators
 */
export const addPosts = (username, posts) => ({type: types.ADD_POSTS, username, posts})
export const addPost = (username, post) => ({type: types.ADD_POST, username, post})
export const updatePost = (username, post) => ({type: types.UPDATE_POST, username, post})
export const editPost = (id) => ({type: types.EDITOR_SET_POST, id})
export const viewPost = (id) => ({type: types.VIEWER_SET_POST, id})


/***
 * Thunk actions (side-effects)
 */
const api = new Api(config.apiBaseUrl)

export function requestCreteOrUpdatePost (username, id, title, body) {
  return function (dispatch) {

    // if new -> create
    if (id === null) {
      return api.createPost(username, title, body).then(
        post => {
          dispatch(addPost(username, post.id, post.title, post.body))
        }
      )
    } else {
      return api.updatePost(username, id, title, body).then(
        post => {
          dispatch(updatePost(username, post))
        }
      )
    }
  }
}

export function requestReadPosts (username) {
  return function (dispatch) {
    return api.readPosts(username).then(
      posts => {
        dispatch(addPosts(username, posts))
      }
    )
  }
}
