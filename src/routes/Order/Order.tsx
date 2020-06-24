import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';
import style from './Order.module.scss';

const Order = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <div>Order page...</div>
          <div className={style.order}>
            <Form
              onSubmit={() => console.log('hey')}
              onClick={() => console.log('hy')}
              onChange={() => console.log('h1y')}
            />
            <div className={style.info}>Chosen Data...</div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Order;
