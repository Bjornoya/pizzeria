import React from 'react';
import { useSelector } from 'react-redux';
import { getPizzas } from '../../utils/selectors';
import { IData } from '../../store';
import Card from '../Card/Card';
import Container from '../Container/Container';
import MainLayout from '../MainLayout/MainLayout';

const Menu = () => {
  const data = useSelector(getPizzas);

  return (
    <MainLayout>
      <Container>
        {data.map((item: IData) => (
          <Card
            photo={item.photo}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))}
      </Container>
    </MainLayout>
  );
};

export default Menu;
