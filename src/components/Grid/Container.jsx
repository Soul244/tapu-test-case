import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 88px; /* Navbar Fix */
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

function Container(props) {
  return <ContainerStyled {...props}></ContainerStyled>
}

Container.propTypes = {}

export default Container
