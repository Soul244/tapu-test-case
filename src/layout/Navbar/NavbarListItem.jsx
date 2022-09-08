import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-decoration: none;
`

const Text = styled.span`
  margin: 10px 0 0;
`

const Icon = styled.i`
  color: #4d4d4d;
`

function NavbarListItem({ icon, title, to, ...rest }) {
  return (
    <li {...rest}>
      <NavLinkStyled to={to}>
        <Icon className={`icon-${icon}`}></Icon>
        <Text>{title}</Text>
      </NavLinkStyled>
    </li>
  )
}

NavbarListItem.propTypes = {}

export default NavbarListItem
