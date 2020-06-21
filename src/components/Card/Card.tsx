import React from 'react';
import style from './Card.module.scss';
import Button from '../Button/Button';

export interface ICardProps {
  photo: string;
  title: string;
  price: string;
  description: string;
}

const Card = ({ photo, title, price, description }: ICardProps) => {
  return (
    <div className={style.card}>
      <img className={style.photo} src={photo} alt={title} />
      <div className={style.title}>{title}</div>
      <div className={style.price}>
        <div className={style.priceItem}>{price}</div>
        <div> /</div>
        <div className={style.priceItem}>5$</div>
      </div>
      <div className={style.description}>{description}</div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default Card;
