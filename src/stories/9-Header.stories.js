import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default {
  title: 'Header',
  component: Header,
};

export const HeaderExample = () => (
  <Router>
    <Switch>
      <Header />
    </Switch>
  </Router>
);
