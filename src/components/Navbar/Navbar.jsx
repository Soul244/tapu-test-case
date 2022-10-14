import React from 'react'
import styled from 'styled-components'

const NavbarStyled = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 88px;
  background: #fafafa;
`

function Navbar(props) {
  return <NavbarStyled {...props}></NavbarStyled>
}

export default Navbar
