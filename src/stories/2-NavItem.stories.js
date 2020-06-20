import React from 'react';
import { action } from '@storybook/addon-actions';
import NavItem from '../components/Navigation/NavItem/NavItem';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'NavItem',
  component: NavItem,
};

export const Default = () => (
  <Router>
    <Switch>
      <NavItem url="/" onClick={action('clicked')}>
        Just item
      </NavItem>
    </Switch>
  </Router>
);
