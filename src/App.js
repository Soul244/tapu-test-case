import { faThList, faUser } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import { Navbar, NavbarList, NavbarListItem } from './layout/Navbar'
import { ROUTES } from './routes'

function App() {
  return (
    <main>
      <Outlet></Outlet>
      <Navbar>
        <NavbarList>
          <NavbarListItem icon="list" title="List" to={ROUTES.LIST}></NavbarListItem>
          <NavbarListItem icon="account" title="Account" to={ROUTES.ACCOUNT}></NavbarListItem>
        </NavbarList>
      </Navbar>
    </main>
  )
}

export default App
