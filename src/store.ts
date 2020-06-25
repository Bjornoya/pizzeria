import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IData {
  photo: string;
  title: string;
  price: string;
  description: string;
  id: string;
}

interface IState {
  data: IData[];
  isLoading: boolean;
  error: null | string;
  selectedItems: Array<string>;
}

export const initialState: IState = {
  data: [
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'aa',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'bb',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'cc',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'dd',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'ee',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'ff',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'gg',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
      title: 'Pepperoni',
      price: '4.47€',
      description:
        'American variety of salami, made from a cured mixture of pork and beef seasoned ' +
        'with paprika or other chili pepper',
      id: 'hh',
    },
  ],
  isLoading: false,
  error: null,
  selectedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    select: (state: IState, { payload }: PayloadAction<string>) => {
      state.selectedItems.push(payload);
    },
  },
});

export const { select: selectItem } = cartSlice.actions;

const reducer = {
  cart: cartSlice.reducer,
};

export const store = configureStore({
  reducer,
});
