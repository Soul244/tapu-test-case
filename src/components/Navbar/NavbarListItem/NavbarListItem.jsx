import React from 'react'
import { Wrapper, NavLinkStyled, IconStyled, Text } from './styles'

export function NavbarListItem({ icon, title, to, ...rest }) {
  return (
    <Wrapper {...rest}>
      <NavLinkStyled to={to}>
        <IconStyled name={icon}></IconStyled>
        <Text>{title}</Text>
      </NavLinkStyled>
    </Wrapper>
  )
}

NavbarListItem.propTypes = {}
// TODO: add proptypes
