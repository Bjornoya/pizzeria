import React from 'react';
import { useSelector } from 'react-redux';
import { getItemsCount } from '../../utils/selectors';
import Navigation from '../Navigation/Navigation';
import Basket from '../Basket/Basket';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import style from './Header.module.scss';

const Header = () => {
  const count = useSelector(getItemsCount);
  console.log(count);

  return (
    <div className={style.header}>
      <Container>
        <div className={style.innerHeader}>
          <div className={style.headerNav}>
            <Logo style={{ marginRight: '20px' }} />
            <Navigation />
          </div>
          <div>
            <Basket count={count} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
