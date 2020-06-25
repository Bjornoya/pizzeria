import React from 'react';
import { useDispatch } from 'react-redux';
import { selectItem } from '../../store';
import style from './Card.module.scss';
import Button from '../Button/Button';

export interface ICardProps {
  photo: string;
  title: string;
  price: string;
  description: string;
  id: string;
}

const Card = ({ photo, title, price, description, id }: ICardProps) => {
  const dispatch = useDispatch();
  const selectMenuItem = (id: string) => {
    dispatch(selectItem(id));
  };

  return (
    <div className={style.card}>
      <img className={style.photo} src={photo} alt={title} />
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.footer}>
        <div className={style.price}>{price}</div>
        <Button onClick={() => selectMenuItem(id)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default Card;
