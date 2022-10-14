import React, { useReducer } from 'react'

import userReducer from 'reducers/user'
import listReducer from 'reducers/list'

import AppContext from './AppContext'

function AppContextProvider({ children }) {
  const [userState, dispatchUser] = useReducer(userReducer.reducer, userReducer.initialData)
  const [listState, dispatchList] = useReducer(listReducer.reducer, listReducer.initialData)

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
