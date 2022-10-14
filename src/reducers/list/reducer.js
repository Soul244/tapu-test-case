import ACTIONS from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BASKET:
      const newBasket = [action.payload.product, ...state.basket]
      localStorage.setItem('basket', JSON.stringify(newBasket))
      return {
        ...state,
        basket: newBasket,
      }
    case ACTIONS.REMOVE_BASKET:
      const filteredBasket = state.basket.filter((item) => item.id !== action.payload.productId)
      localStorage.setItem('basket', JSON.stringify(filteredBasket))
      return {
        ...state,
        basket: filteredBasket,
      }
    default:
      return state
  }
}

export default reducer
