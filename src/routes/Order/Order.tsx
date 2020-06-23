import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';

const Order = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <div>Order page...</div>
          <Form
            onSubmit={() => console.log('hey')}
            onClick={() => console.log('hy')}
            onChange={() => console.log('h1y')}
          />
        </Container>
      </MainLayout>
    </>
  );
};

export default Order;
