import React from 'react';
import Header from '../../components/Header/Header';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';
import Error from '../../components/Empty/Error';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';

const SuccessPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <Error>Thanks for your order!</Error>
          <NavLink to="/">
            <Button text>Go back to menu</Button>
          </NavLink>
        </Container>
      </MainLayout>
    </>
  );
};

export default SuccessPage;
