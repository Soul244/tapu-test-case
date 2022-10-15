import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

test('should render Button as default', () => {
  render(<Button></Button>)
  const MyButton = screen.getByRole('button')
  expect(MyButton).toHaveStyle('border: none')
  expect(MyButton).toHaveStyle('color: #ffffff')
  expect(MyButton).toHaveStyle('background-color: #e82223')
})

test('should render Button as bordered', () => {
  render(<Button isBordered></Button>)
  const MyButton = screen.getByRole('button')
  expect(MyButton).toHaveStyle('border: 1px solid #e82223')
  expect(MyButton).toHaveStyle('color: #e82223')
  expect(MyButton).toHaveStyle('background-color: #ffffff')
})
