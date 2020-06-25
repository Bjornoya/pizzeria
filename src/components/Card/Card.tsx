import React from 'react';
import style from './Card.module.scss';
import Button from '../Button/Button';

export interface ICardProps {
  photo: string;
  title: string;
  price: string;
  description: string;
  id?: string;
}

const Card = ({ photo, title, price, description, id }: ICardProps) => {
  return (
    <div className={style.card}>
      <img className={style.photo} src={photo} alt={title} />
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.footer}>
        <div className={style.price}>{price}</div>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default Card;
