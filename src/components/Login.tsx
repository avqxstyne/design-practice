import React from 'react'

const Login = () => {
  return (
    <div className="login">

            <div className="icon">
                <span className="material-symbols-outlined">
                    lock
                </span>
            </div>

            <form className="login-form">
                <input type="email" className="login-form-email" />
                <input type="password" className="login-form-password" />
                <button type='submit' className="login-form-submit">Submit</button>
                <div className="forgot-password">Forgot password?</div>
            </form>
        </div>
  )
}

export default Login

