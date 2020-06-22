import React from 'react';
import Navigation from '../Navigation/Navigation';
import Basket from '../Basket/Basket';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <Navigation />
      <Basket count="0" total="0$" />
    </div>
  );
};

export default Header;
