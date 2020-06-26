import { createSelector } from '@reduxjs/toolkit';
import { IData } from '../store';

export const getPizzas = (state: any) => state.cart.data;

export const getDeliveryPrice = (state: any) => state.cart.delivery;

export const getSelectedItems = (state: any) => state.cart.selectedItems;

export const getItemsCount = createSelector(getPizzas, (pizzas) =>
  pizzas.map((item: IData) => item.count).reduce((prev: number, next: number) => prev + next)
);

export const getSelectedItemsData = createSelector(getPizzas, (pizzas) =>
  pizzas.filter((pizza: IData) => pizza.count > 0)
);
