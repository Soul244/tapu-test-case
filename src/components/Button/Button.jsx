import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './styles'

export function Button({ isBordered, ...rest }) {
  return <ButtonStyled isBordered={isBordered} {...rest}></ButtonStyled>
}

Button.propTypes = {
  isBordered: PropTypes.bool,
}
