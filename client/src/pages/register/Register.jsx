import './register.css'

const Register = () => {
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
            <input placeholder="Username" className="login-input" />
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <input type="password" placeholder="Confirm password" className="login-input" />
            <button className="login-button">Sign up</button>
            <button className="login-register-button">Already have an account?</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register