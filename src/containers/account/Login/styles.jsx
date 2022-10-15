import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    height: auto;
    max-width: 650px;
    margin: 0 auto;
  }
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

export { Form, Input }
