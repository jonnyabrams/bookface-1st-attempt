import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router'
import './register.css'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    if (password2.current.value !== password.current.value) {
      password2.current.setCustomValidity("Passwords don't match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post('/auth/register', user)
        navigate('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className='login-logo'>Bookface</h3>
          <span className="login-description">
            A book of faces for your browsing pleasure.
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input 
              placeholder="Username" 
              required
              className="login-input" 
              ref={username} 
            />
            <input 
              type="email" 
              required
              placeholder="Email" 
              className="login-input" 
              ref={email} 
            />
            <input 
              type="password" 
              required
              placeholder="Password" 
              className="login-input" 
              ref={password} 
              // minLength="6"
            />
            <input 
              type="password" 
              required
              placeholder="Confirm password" 
              className="login-input" 
              ref={password2}
            />
            <button className="login-button" type="submit">Sign up</button>
            <button className="login-register-button">Already have an account?</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register