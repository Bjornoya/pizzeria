import React from 'react';
import { useSelector } from 'react-redux';
import { getItemsCount } from '../../utils/selectors';
import Navigation from '../Navigation/Navigation';
import Basket from '../Basket/Basket';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import style from './Header.module.scss';
import Login from '../Login/Login';

const Header = () => {
  const count = useSelector(getItemsCount);

  return (
    <div className={style.header}>
      <Container>
        <div className={style.innerHeader}>
          <div className={style.headerNav}>
            <Logo style={{ marginRight: '20px' }} />
            <Navigation />
          </div>
          <div className={style.headerNav}>
            <Login />
            <Basket count={count} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
