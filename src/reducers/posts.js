import _ from 'lodash'
import * as types from '../constants/action-types'

const initialState = {}

// posts reducer
export default function (state = initialState , action) {
  switch (action.type) {
    
    case types.ADD_POSTS:
      return _.reduce(action.posts, (s, post) => ({ ...s, [post.id]: post}), state)

    case types.ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    case types.UPDATE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    default:
      return state
  }
}
