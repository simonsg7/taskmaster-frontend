import React from 'react';
import './Login.scss';
import logo from '../../assets/Captura_de_pantalla_2024-11-15_093642-removebg-preview.png'

const Login = () => {
      return (
      <div className="login-container">
            <div className="logo-container">
                  <img src={ logo } alt="Task Master Logo" className="size-auto top-full" />
            </div>
            <div className="login-form">
                  <button className="login-button">Log in</button>
            </div>
      </div>
      );
};

export default Login;