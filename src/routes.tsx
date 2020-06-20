import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Navigation from './components/Navigation/Navigation';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Navigation} />
      </Switch>
    </App>
  );
};

export default Routes;
