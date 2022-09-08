import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 90px 24px 20px;
`

const H1 = styled.h1`
  margin: 0 0 30px 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.1px;
  color: #121212;
`

const inputStyles = css`
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

const Input = styled.input`
  ${inputStyles}
`

const Select = styled.select`
  ${inputStyles}
`

const Button = styled.button`
  width: 100%;
  padding: 20px 30px;
  border: none;
  background: #e82223;
  color: #ffffff;
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

function Account(props) {
  const handleLogin = () => {}
  return (
    <Form onSubmit={handleLogin}>
      <H1>Account</H1>
      <Input type="email" placeholder="E-mail" required />
      <Input type="password" placeholder="Password" />
      <Select name="locale" id="locale">
        <option value="turkish">Turkish</option>
        <option value="english">English</option>
      </Select>
      <Button type="submit">Sign Up</Button>
    </Form>
  )
}

Account.propTypes = {}

export default Account
