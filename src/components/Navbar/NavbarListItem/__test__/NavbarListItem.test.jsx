import { render, screen } from '@testing-library/react'
import { NavbarListItem } from '../NavbarListItem'
import { MemoryRouter } from 'react-router-dom'

test('should render a li element', async () => {
  render(
    <MemoryRouter>
      <NavbarListItem iconName="list" title={'test'} to={'test'}></NavbarListItem>
    </MemoryRouter>,
  )

  const myNavbarListItem = await screen.findByTestId('li')
  screen.debug()
  expect(myNavbarListItem).toBeInTheDocument()
})

test('should render a li element 2', async () => {
  render(<NavbarListItem iconName="list" title={'test'} to={'test'}></NavbarListItem>)

  const myNavbarListItem = await screen.findByRole('li')
  screen.debug()
  expect(myNavbarListItem).toBeInTheDocument()
})
