import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Icon } from 'components/Icon'

// To give a style for active link -> check documents https://reactrouter.com/en/main/components/nav-link
const Wrapper = styled.li`
  width: 100%;
  height: 100%;
  .active {
    background: #e1e1e1;
    span,
    i {
      color: black;
    }
  }
`

const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #000000;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-decoration: none;
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 20px;
  }
`

const Text = styled.span`
  margin: 10px 0 0;
  font-weight: 600;
`

const IconStyled = styled(Icon)`
  color: #4d4d4d;
  font-size: 24px;
`

export { Wrapper, NavLinkStyled, Text, IconStyled }
