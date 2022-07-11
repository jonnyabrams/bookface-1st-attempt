import './login.css'

const Login = () => {
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
          <div className="login-box">
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button className="login-button">Log in</button>
            <span className="login-forgot">Forgot password?</span>
            <button className="login-register-button">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login