import React from 'react';
import style from './Card.module.scss';
import Button from '../Button/Button';

export interface ICardProps {
  photo: string;
  title: string;
  price: string;
  description: string;
  id: string;
  onAdd: () => void;
}

const Card = ({ photo, title, price, description, onAdd }: ICardProps) => {
  return (
    <div className={style.card}>
      <img className={style.photo} src={photo} alt={title} />
      <div className={style.body}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.footer}>
          <div className={style.price}>{price} €</div>
          <Button onClick={onAdd}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
