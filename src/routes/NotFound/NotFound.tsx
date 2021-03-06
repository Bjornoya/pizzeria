import React from 'react';
import Header from '../../components/Header/Header';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';
import Error from '../../components/Empty/Error';

const NotFound = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Container>
          <Error>Page Not Found</Error>
        </Container>
      </MainLayout>
    </>
  );
};

export default NotFound;
