import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Order from './routes/Order/Order';
import UnderConstruction from './routes/UnderConstruction/UnderConstruction';
import OrderHistory from './routes/OrderHistory/OrderHistory';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import LoginPage from './routes/Login/LoginPage';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/about" component={UnderConstruction} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/history" component={OrderHistory} />
        <Route component={NotFound} />
      </Switch>
    </App>
  );
};

export default Routes;
