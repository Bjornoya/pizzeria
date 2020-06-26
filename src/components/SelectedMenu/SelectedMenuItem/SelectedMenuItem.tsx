import React from 'react';
import { ICardProps } from '../../Card/Card';
import Icon from '../../Icon/Icon';
import style from './SelectedMenuItem.module.scss';
import Button from '../../Button/Button';

interface ISelectedMenuItemProps extends ICardProps {
  count: number;
  onDelete: () => void;
  onSubtract: () => void;
}

const SelectedMenuItem = ({
  photo,
  title,
  description,
  count,
  price,
  onDelete,
  onAdd,
  onSubtract,
}: ISelectedMenuItemProps) => {
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
        <Button onClick={onAdd}>
          <div className={style.plus}>+</div>
        </Button>
        <div className={style.count}>{count}</div>
        <Button onClick={onSubtract}>
          <div className={style.minus}>—</div>
        </Button>
      </div>
      <div className={style.actions}>
        <div className={style.price}>{price} €</div>
        <Icon onClick={onDelete} icon="delete" />
      </div>
    </div>
  );
};

export default SelectedMenuItem;
