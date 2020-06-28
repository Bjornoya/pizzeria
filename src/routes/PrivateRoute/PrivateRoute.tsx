import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = {
  isAuth: false,
};

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
