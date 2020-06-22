import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Order from './routes/Order/Order';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route component={NotFound} />
      </Switch>
    </App>
  );
};

export default Routes;
