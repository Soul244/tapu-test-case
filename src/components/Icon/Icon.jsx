import React from 'react'
import PropTypes from 'prop-types'
import { IconStyled } from './styles'

export function Icon({ name, size, color, className }) {
  return <IconStyled className={`${className} icon-${name}`} size={size} color={color}></IconStyled>
}

Icon.propTypes = {
  name: PropTypes.oneOf(['minus', 'star', 'marker', 'plus', 'account', 'list']).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
}
