import ACTIONS from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload.user,
      }
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: {},
      }
    default:
      return state
  }
}

export default reducer
