import './login.css'

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
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
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button className="login-button">Log in</button>
            <span className="login-forgot">Forgot password?</span>
            <button className="login-register-button">Create a new account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login