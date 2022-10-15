import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, NavLinkStyled, IconStyled, Text } from './styles'

export function NavbarListItem({ iconName, title, to, ...rest }) {
  return (
    <Wrapper {...rest}>
      <NavLinkStyled to={to}>
        <IconStyled name={iconName}></IconStyled>
        <Text>{title}</Text>
      </NavLinkStyled>
    </Wrapper>
  )
}

NavbarListItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  iconName: PropTypes.oneOf(['account', 'list']).isRequired,
}
