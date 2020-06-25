import React from 'react';
import { ICardProps } from '../../Card/Card';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import style from './SelectedMenuItem.module.scss';

interface ISelectedMenuItemProps extends ICardProps {
  count: string;
}

const SelectedMenuItem = ({ photo, title, description, count, price }: ISelectedMenuItemProps) => {
  return (
    <div className={style.item}>
      <div className={style.description}>
        <img className={style.image} src={photo} alt="Pizza" />
        <div className={style.text}>
          <div className={style.name}>{title}</div>
          <div className={style.size}>{description}</div>
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
