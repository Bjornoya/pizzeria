import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import style from './Login.module.scss';

interface ILoginProps {
  children: React.ReactNode;
  onClick?: () => void;
  url: string;
}

const Login = ({ children, url, onClick }: ILoginProps) => {
  return (
    <div className={style.login}>
      <NavLink to={url}>
        <Button onClick={onClick} text>
          {children}
        </Button>
      </NavLink>
    </div>
  );
};

export default Login;
