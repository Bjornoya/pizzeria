import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import MainLayout from '../../components/MainLayout/MainLayout';
import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import { getAuth } from '../../utils/selectors';
import Error from '../../components/Empty/Error';

const LoginPage = () => {
  const isAuth = useSelector(getAuth);
  return (
    <>
      <Header />
      <MainLayout>
        <Container>{isAuth ? <Error>Succesfully Loginned</Error> : <LoginForm />}</Container>
      </MainLayout>
    </>
  );
};

export default LoginPage;
