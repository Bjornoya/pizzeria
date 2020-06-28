import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import style from './Login.module.scss';

const Login = () => {
  return (
    <div className={style.login}>
      <NavLink to="login">
        <Button text>Log In</Button>
      </NavLink>
    </div>
  );
};

export default Login;
