import { createSelector } from '@reduxjs/toolkit';
import { IData } from '../store';

export const getPizzas = (state: any) => state.cart.data;

export const getSelectedItems = (state: any) => state.cart.selectedItems;

export const getSelectedItemsData = createSelector(
  getPizzas,
  getSelectedItems,
  (pizzas, selectedItems) => pizzas.filter((pizza: IData) => selectedItems.includes(pizza.id))
);
