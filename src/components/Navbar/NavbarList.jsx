import React from 'react'
import styled from 'styled-components'

const NavbarListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

function NavbarList(props) {
  return <NavbarListStyled {...props}></NavbarListStyled>
}

export default NavbarList
