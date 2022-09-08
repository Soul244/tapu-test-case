import React from 'react'
import styled from 'styled-components'

const NavbarListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
`

function NavbarList(props) {
  return <NavbarListStyled {...props}></NavbarListStyled>
}

export default NavbarList
