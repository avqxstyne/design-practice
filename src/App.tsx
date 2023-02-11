import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.scss';

function App() {
  return (
    <div className="App">

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

    </div>
  );
}

export default App;
