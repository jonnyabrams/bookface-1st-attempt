import { useRef, useContext } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import CircularProgress from '@mui/material/CircularProgress'

const Login = () => {
  const email = useRef()
  const password = useRef()
  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall({ email: email.current.value, password: password.current.value }, dispatch)
  }

  console.log(user)

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
              // minLength="6"
              className="login-input" 
              ref={password} 
            />
            <button className="login-button">{ isFetching ? <CircularProgress style={{ color: 'white' }} /> : 'Log in' }</button>
            <span className="login-forgot">Forgot password?</span>
            <button className="login-register-button">{ isFetching ? <CircularProgress style={{ color: 'white' }} /> : 'Create a new account' }</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login