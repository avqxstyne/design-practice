import React from 'react'

const Login = () => {
  return (
    <div className='login-bg'>
        <div className="login">

            <div className="icon">
                <span className="material-symbols-outlined">
                    lock
                </span>
            </div>

            <form className="login-form">
                <div className='email-input-wrapper'>
                    <input type="email" className="login-form-email"/>
                    <div className="line"></div>
                </div>
                <div className='password-input-wrapper'>
                    <input type="password" className="login-form-password" />
                    <div className="line"></div>
                </div>
                <button type='submit' className="login-form-submit">Submit</button>
                <div className="forgot-password">Forgot password?</div>
            </form>
        </div>
    </div>
  )
}

export default Login

