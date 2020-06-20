import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const ListOfItems = () => (
  <Router>
    <Switch>
      <Navigation />
    </Switch>
  </Router>
);
