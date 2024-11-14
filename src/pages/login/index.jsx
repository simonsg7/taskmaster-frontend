import React from 'react';
import './Login.scss';

const Login = () => {
      return (
      <div className="login-container">
            <div className="logo-container">
            <div className="logo">
            <div className="arrow-icon"></div>
            </div>
            <div className="title">
            <h1>TASK MASTER</h1>
            </div>
            </div>
            <div className="login-form">
            <button className="login-button">Log in</button>
            </div>
      </div>
      );
};

export default Login;