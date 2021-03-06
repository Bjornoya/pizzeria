import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';
import style from './Order.module.scss';
import SelectedMenu from '../../components/SelectedMenu/SelectedMenu';

const Order = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <div className={style.order}>
            <div className={style.form}>
              <Form />
            </div>
            <div className={style.info}>
              <SelectedMenu />
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Order;
