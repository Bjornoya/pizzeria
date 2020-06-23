import React from 'react';
import style from './Basket.module.scss';
import Button from '../Button/Button';

interface IBasketProps {
  count: string;
}

const Basket = ({ count }: IBasketProps) => {
  return (
    <Button>
      <div className={style.basket}>
        <div className={style.text}>Basket</div>
        <div className={style.line}>{''}</div>
        <div className={style.total}>{count}</div>
      </div>
    </Button>
  );
};

export default Basket;
