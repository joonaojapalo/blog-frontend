import * as types from '../constants/action-types'
import * as initStates from '../constants/init-states'

const initialState = {
    initState: initStates.INIT_NEW
}

// app-state reducer
export default function (state = initialState , action) {
  switch (action.type) {
    case types.APP_INIT_START:
      return {
        ...state,
         initState: initStates.INIT_PENDING
      }

    case types.APP_INIT_SUCCESS:
      return {
        ...state,
         initState: initStates.INIT_OK
      }

    case types.APP_INIT_ERROR:
      return {
        ...state,
         initState: initStates.INIT_ERROR
      }
    
    default:
      return state
  }
}
