import styled from 'styled-components'

const Select = styled.select`
  margin: 0 0 20px 0;
  padding: 8px 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: #bbc3cf;
  outline: none;
  &:active,
  &:focus,
  &:not(&:placeholder-shown) {
    border-color: #0dafc0;
  }
`

export { Select }
