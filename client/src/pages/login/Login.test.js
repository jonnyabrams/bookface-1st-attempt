import Login from "./Login"
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"

// render Login wrapped in BrowserRouter to avoid error "useNavigate() may be used only in the context of a Router component"

describe('Login', () => {
  describe('email input', () => {
    test('email input should be rendered', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const emailInputEl = screen.getByPlaceholderText(/email/i)
      expect(emailInputEl).toBeInTheDocument()
    })
  
    test('email input should be empty', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const emailInputEl = screen.getByPlaceholderText(/email/i)
      expect(emailInputEl.value).toBe("")
    })
  
    test('email input should accept text', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const emailInputEl = screen.getByPlaceholderText(/email/i)
      expect(emailInputEl.value).toBe("")
      fireEvent.change(emailInputEl, {target: {value: 'testing'}})
      expect(emailInputEl.value).toBe('testing')
    })
  })
  
  describe('password input', () => {
    test('password input should be rendered', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const passwordInputEl = screen.getByPlaceholderText(/password/i)
      expect(passwordInputEl).toBeInTheDocument()
    })
  
    test('password input should be empty', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const passwordInputEl = screen.getByPlaceholderText(/password/i)
      expect(passwordInputEl.value).toBe("")
    })
  
    test('password input should accept text', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const passwordInputEl = screen.getByPlaceholderText(/password/i)
      expect(passwordInputEl.value).toBe("")
      fireEvent.change(passwordInputEl, {target: {value: 'testing'}})
      expect(passwordInputEl.value).toBe('testing')
    })
  })
  
  describe('buttons', () => {
    test('two buttons should be rendered', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const buttons = screen.getAllByRole("button")
      expect(buttons).toHaveLength(2)
    })

    test('the first button should say log in', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const buttons = screen.getAllByRole("button")
      expect(buttons[0]).toHaveTextContent('Log in')
    })

    test('the second button should say create a new account', () => {
      render(<BrowserRouter><Login /></BrowserRouter>)
      const buttons = screen.getAllByRole("button")
      expect(buttons[1]).toHaveTextContent('Create a new account')
    })
  })
})
