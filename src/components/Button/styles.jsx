import styled, { css } from 'styled-components'

function isBordered({ isBordered }) {
  if (isBordered) {
    return css`
      background-color: #ffffff;
      color: #e82223;
      border: 1px solid #e82223;
    `
  }
  return css`
    border: none;
    background-color: #e82223;
    color: #ffffff;
  `
}

const ButtonStyled = styled.button`
  ${isBordered};
  width: 100%;
  padding: 20px 30px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:disabled {
    background: #bbc3cf;
  }
`

export { ButtonStyled }
