import React from 'react';
import Card from '../components/Card/Card';

export default {
  title: 'Card',
  component: Card,
};

export const PizzaExample = () => (
  <Card
    photo="https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg"
    title="Pepperoni"
    price="4.47€"
    description="American variety of salami, made from a cured mixture of pork and beef seasoned
    with paprika or other chili pepper"
  />
);
