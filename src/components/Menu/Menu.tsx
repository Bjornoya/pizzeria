import React from 'react';
import Card from '../Card/Card';
import Container from '../Container/Container';
import MainLayout from '../MainLayout/MainLayout';

const data = [
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'aa',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'bb',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'cc',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'dd',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'ee',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'ff',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'gg',
  },
  {
    photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    title: 'Pepperoni',
    price: '4.47€',
    description:
      'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
      'with paprika or other chili pepper',
    key: 'hh',
  },
];

const Menu = () => {
  return (
    <MainLayout>
      <Container>
        {data.map((item) => (
          <Card
            photo={item.photo}
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.key}
          />
        ))}
      </Container>
    </MainLayout>
  );
};

export default Menu;
