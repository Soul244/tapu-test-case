import React, { useReducer } from 'react'
import userReducer from '../../reducers/user'
import listReducer from '../../reducers/list'

import AppContext from './AppContext'

function AppContextProvider({ children }) {
  const [userState, dispatchUser] = useReducer(userReducer.reducer, userReducer.initialData)
  const [listState, dispatchList] = useReducer(listReducer.reducer, listReducer.initialData)

  // const addBasket = (product) => {
  //   if (!state.basket.some((item) => item.id === product.id)) {
  //     dispatch({ type: ACTIONS.ADD_BASKET, payload: { product } })
  //   }
  // }

  // const removeBasket = (productId) => {
  //   dispatch({ type: ACTIONS.REMOVE_BASKET, payload: { productId } })
  // }

  return (
    <AppContext.Provider
      value={{
        userState,
        dispatchUser,
        listState,
        dispatchList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
