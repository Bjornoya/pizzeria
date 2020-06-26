import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Order from './routes/Order/Order';
import UnderConstruction from './routes/UnderConstruction/UnderConstruction';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/about" component={UnderConstruction} />
        <Route path="/history" component={UnderConstruction} />
        <Route component={NotFound} />
      </Switch>
    </App>
  );
};

export default Routes;
