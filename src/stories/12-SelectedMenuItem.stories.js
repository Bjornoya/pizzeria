import React from 'react';
import SelectedMenuItem from '../components/SelectedMenu/SelectedMenuItem/SelectedMenuItem';

export default {
  title: 'SelectedMenuItem',
  component: SelectedMenuItem,
};

export const SelectedMenuItemExample = () => (
  <div style={{ width: '600px', margin: '50px auto' }}>
    <SelectedMenuItem
      image="https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg"
      name="Pepperoni"
      price="4.47€"
      size="American variety of salami"
      count="1"
    />
  </div>
);
