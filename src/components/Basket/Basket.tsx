import React from 'react';
import Icon from '../Icon/Icon';
import style from './Basket.module.scss';

interface IBasketProps {
  count: string;
  total: string;
}

const Basket = ({ count, total }: IBasketProps) => {
  return (
    <div className={style.basket}>
      <div className={style.count}>{count}</div>
      <Icon icon="shopping_cart" />
      <div className={style.total}>{total}</div>
    </div>
  );
};

export default Basket;
