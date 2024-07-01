// import React from 'react';
import './register.css';
import 'boxicons';

const Register = () => {
  return (
    <div className="Register-container">
      <div className="Register-box">
        <h2>Register</h2>
        <form>
          <div className="input-group">
            <input type="text" required />
            <span className="input-icon">
              <box-icon type='solid' name='user' ></box-icon>
            </span>
            <label>Username</label>  
          </div>

          <div className="input-group">
            <input type="email" required />
            <span className="input-icon">
              <box-icon type='solid' name='user' ></box-icon>
            </span>
            <label>Email</label>  
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
          <button type="submit">Register</button>
        </form>
        <p>Dont have an account? <a href="#">Register</a></p>
      </div>
    </div>
  );
};

export default Register;
