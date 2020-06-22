import React from 'react';
import Basket from '../components/Basket/Basket';

export default {
  title: 'Basket',
  component: Basket,
};

export const BasketExample = () => <Basket count="0" total="0$" />;
