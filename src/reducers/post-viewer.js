import * as types from '../constants/action-types'

const initialState = {postId: null}

// postViewer  reducer
export default function (state = initialState , action) {
  switch (action.type) {
    case types.VIEWER_SET_POST: 
      return {
        ...state,
        postId: action.id
      }

    default:
      return state
  }
}