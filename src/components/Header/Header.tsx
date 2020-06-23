import React from 'react';
import Navigation from '../Navigation/Navigation';
import Basket from '../Basket/Basket';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.innerHeader}>
          <div className={style.headerNav}>
            <Logo style={{ marginRight: '20px' }} />
            <Navigation />
          </div>
          <div>
            <Basket count="0" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
