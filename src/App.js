import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import Container from './components/Grid/Container'
import { Navbar, NavbarList, NavbarListItem } from './components/Navbar'
import { ROUTES } from './routes'

function App() {
  const { t } = useTranslation()
  return (
    <main>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Navbar>
        <NavbarList>
          <NavbarListItem icon="list" title={t('navbar.list')} to={ROUTES.LIST}></NavbarListItem>
          <NavbarListItem icon="account" title={t('navbar.account')} to={ROUTES.ACCOUNT}></NavbarListItem>
        </NavbarList>
      </Navbar>
    </main>
  )
}

export default App
