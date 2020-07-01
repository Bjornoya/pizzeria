import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPizzas, loginFirebase } from './store';
import fireDb from './firebase';
import '../src/assets/style/style.scss';

interface IAppProps {
  children: React.ReactNode;
}

const auth = fireDb.auth();

const App = ({ children }: IAppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  // Login In - Log Out Firebase Logic
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    auth.onAuthStateChanged(setState);
    dispatch(loginFirebase(Boolean(state)));
  }, [state, dispatch]);

  return <div>{children}</div>;
};

export default App;
