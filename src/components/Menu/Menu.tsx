import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../utils/selectors';
import { IData } from '../../store';
import { onAdd } from '../../utils/functions';
import Card from '../Card/Card';
import Container from '../Container/Container';
import MainLayout from '../MainLayout/MainLayout';
import style from './Menu.module.scss';

const Menu = () => {
  const dispatch = useDispatch();

  const data = useSelector(getPizzas);
  return (
    <MainLayout>
      <Container>
        <div className={style.menu}>
          {data.length > 1
            ? data.map((item: IData) => (
              <Card
                photo={item.photo}
                title={item.title}
                price={item.price}
                description={item.description}
                id={item.id}
                onAdd={() => onAdd(dispatch, item.id)}
                key={item.id}
              />
            ))
            : null}
        </div>
      </Container>
    </MainLayout>
  );
};

export default Menu;
