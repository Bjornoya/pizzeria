import React from 'react';
import Header from '../../components/Header/Header';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';

const NotFound = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <div>Page not found...</div>
        </Container>
      </MainLayout>
    </>
  );
};

export default NotFound;
