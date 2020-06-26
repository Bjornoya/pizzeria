import { createSelector } from '@reduxjs/toolkit';
import { IData } from '../store';

export const getPizzas = (state: any) => state.cart.data;

export const getDeliveryPrice = (state: any) => state.cart.delivery;

export const getItemsCount = createSelector(getPizzas, (pizzas) =>
  pizzas.map((item: IData) => item.count).reduce((prev: number, next: number) => prev + next)
);

export const getTotalCount = createSelector(getPizzas, (pizzas) =>
  pizzas
    .map((item: IData) => item.price * item.count)
    .reduce((prev: number, next: number) => prev + next)
    .toFixed(2)
);

export const getTotalCountWithDelivery = createSelector(getTotalCount, (total) =>
  (Number(total) + 5).toFixed(2)
);

export const getTotalCountUsd = createSelector(getTotalCountWithDelivery, (total) =>
  (Number(total) * 1.12).toFixed(2)
);

export const getSelectedItemsData = createSelector(getPizzas, (pizzas) =>
  pizzas.filter((pizza: IData) => pizza.count > 0)
);
