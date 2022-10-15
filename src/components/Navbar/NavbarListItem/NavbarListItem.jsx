import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, NavLinkStyled, IconStyled, Text } from './styles'

export function NavbarListItem({ iconName, title, to, ...rest }) {
  return <li {...rest}></li>
}

NavbarListItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  iconName: PropTypes.oneOf(['account', 'list']).isRequired,
}
