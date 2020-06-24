import React from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import style from './SelectedMenuItem.module.scss';

interface ISelectedMenuItemProps {
  image: string;
  name: string;
  size: string;
  count: string;
  price: string;
}

const SelectedMenuItem = ({ image, name, size, count, price }: ISelectedMenuItemProps) => {
  return (
    <div className={style.item}>
      <div className={style.description}>
        <img className={style.image} src={image} alt="Pizza" />
        <div className={style.text}>
          <div className={style.name}>{name}</div>
          <div className={style.size}>{size}</div>
        </div>
      </div>
      <div className={style.buttons}>
        <Button>
          <div className={style.plus}>+</div>
        </Button>
        <div className={style.count}>{count}</div>
        <Button>
          <div className={style.minus}>—</div>
        </Button>
      </div>
      <div className={style.actions}>
        <div className={style.price}>{price}</div>
        <Icon icon="delete" />
      </div>
    </div>
  );
};

export default SelectedMenuItem;
