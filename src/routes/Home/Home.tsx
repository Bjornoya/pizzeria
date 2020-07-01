import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { useDispatch } from 'react-redux';
import { loginFirebase } from '../../store';
import fireDb from '../../firebase';

const auth = fireDb.auth();

const Home = () => {
  // Login In - Log Out Firebase Logic
  const dispatch = useDispatch();
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    auth.onAuthStateChanged(setState);
    dispatch(loginFirebase(Boolean(state)));
  }, [state, dispatch]);
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

export default Home;
