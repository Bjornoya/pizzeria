import React, { CSSProperties } from 'react';
import classes from './Logo.module.scss';
import LogoImg from '../../assets/img/logo.png';

interface ILogoProps {
  style?: CSSProperties;
}

const Logo = ({ style }: ILogoProps) => {
  return <img style={style || undefined} className={classes.logo} src={LogoImg} alt="Logo" />;
};

export default Logo;
