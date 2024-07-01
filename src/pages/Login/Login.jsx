// import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import 'boxicons';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <input type="email" required />
            <span className="input-icon">
              <box-icon type='solid' name='user' ></box-icon>
            </span>
            <label>Username</label>
            
          </div>
          <div className="input-group">
            <input type="password" required />
            <span className="input-icon">
              <box-icon name='lock' ></box-icon>
            </span>
            <label>Password</label>
            
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Dont have an account? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
