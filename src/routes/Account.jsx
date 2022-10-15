import { Logged } from 'containers/account/Logged'
import { Login } from 'containers/account/Login'
import { AppContext } from 'contexts/AppContext'
import React, { useContext } from 'react'

function Account() {
  const { userState } = useContext(AppContext)

  return <>{userState.user.name ? <Logged></Logged> : <Login></Login>}</>
}

export default Account
