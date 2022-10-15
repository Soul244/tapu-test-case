import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const H1 = styled.h1`
  margin: 0 0 30px 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.1px;
  color: #121212;
`

const Input = styled.input`
  margin-bottom: 30px;
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

export { Form, H1, Input }
