import React from 'react';
import { useSelector } from 'react-redux';
import fireDb from '../../firebase';
import { getAuth, getItemsCount } from '../../utils/selectors';
import Navigation from '../Navigation/Navigation';
import Basket from '../Basket/Basket';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Login from '../Login/Login';
import style from './Header.module.scss';

const Header = () => {
  const count = useSelector(getItemsCount);
  const isAuth = useSelector(getAuth);

  return (
    <div className={style.header}>
      <Container>
        <div className={style.innerHeader}>
          <div className={style.headerNav}>
            <Logo style={{ marginRight: '20px' }} />
            <Navigation isAuth={isAuth} />
          </div>
          <div className={style.headerNav}>
            {isAuth ? (
              <Login url="/" onClick={() => fireDb.auth().signOut()}>
                Log Out
              </Login>
            ) : (
              <Login url="/login">Log In</Login>
            )}
            <Basket count={count} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
