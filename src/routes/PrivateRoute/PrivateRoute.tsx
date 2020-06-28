import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuth } from '../../utils/selectors';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuth = useSelector(getAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
