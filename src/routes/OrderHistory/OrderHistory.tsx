import React from 'react';
import Header from '../../components/Header/Header';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';

const OrderHistory = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <div>Order History</div>
        </Container>
      </MainLayout>
    </>
  );
};

export default OrderHistory;
