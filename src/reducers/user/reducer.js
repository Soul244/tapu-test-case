import ACTIONS from './actions'
import initialData from './initialData'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload.user,
      }
    case ACTIONS.LOGOUT:
      return initialData
    default:
      return state
  }
}

export default reducer
