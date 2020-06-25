import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Basket.module.scss';
import Button from '../Button/Button';

interface IBasketProps {
  count: string;
}

const Basket = ({ count }: IBasketProps) => {
  return (
    <NavLink to="/order">
      <Button>
        <div className={style.basket}>
          <div className={style.text}>Basket</div>
          <div className={style.line}>{''}</div>
          <div className={style.total}>{count}</div>
        </div>
      </Button>
    </NavLink>
  );
};

export default Basket;
