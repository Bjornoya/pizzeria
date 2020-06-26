import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IData {
  photo: string;
  title: string;
  price: string;
  count: number;
  description: string;
  id: string;
}

interface IState {
  data: IData[];
  isLoading: boolean;
  error: null | string;
  selectedItems: Array<string>;
  delivery: number;
}

export const initialState: IState = {
  data: [
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/698-300.jpg',
      title: 'Cheeseburger',
      price: '4.29',
      count: 0,
      description:
        'Grilled sauce, mozzarella cheese, pickled cucumbers, pork, chicken breast, bacon',
      id: 'aa',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/11-300.jpg',
      title: '4 Cheese',
      price: '4.59',
      count: 0,
      description: 'Pizza sauce, mozzarella cheese, a mixture of cheeses',
      id: 'bb',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/1-300.jpg',
      title: 'Pepperoni light',
      price: '2.29',
      count: 0,
      description: 'Pizza sauce, mozzarella cheese, pepperoni sausage, mushrooms',
      id: 'cc',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/16-300.jpg',
      title: 'Village',
      price: '4.79',
      count: 0,
      description:
        'Pizza sauce, mozzarella cheese, garlic, red onion, champignons, pork, bacon, greens',
      id: 'dd',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/17-300.jpg',
      title: 'Julietta',
      price: '4.99',
      count: 0,
      description: 'Champignon mushrooms in a creamy sauce, mozzarella cheese, green',
      id: 'ee',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/593-300.jpg',
      title: 'Diablo',
      price: '4.39',
      count: 0,
      description: 'Texas barbecue sauce, mozzarella cheese, red onion, salami sausage, ham',
      id: 'ff',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/629-300.jpg',
      title: 'Caesar',
      price: '4.39',
      count: 0,
      description: 'Caesar sauce, mozzarella cheese, tomatoes, chicken breast, bacon',
      id: 'gg',
    },
    {
      photo: 'https://static.pizzasushiwok.ru/images/menu_new/649-300.jpg',
      title: 'Mexican',
      price: '3.59',
      count: 0,
      description:
        'Tomato paste, spices, bell pepper, onions, minced beef, beans, mozzarella cheese',
      id: 'hh',
    },
  ],
  isLoading: false,
  error: null,
  selectedItems: [],
  delivery: 5,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    select: (state: IState, { payload }: PayloadAction<string>) => {
      state.selectedItems.push(payload);
    },
    remove: (state: IState, { payload }: PayloadAction<string>) => {
      state.data.map((item) => {
        if (item.id === payload) {
          return (item.count = 0);
        } else {
          return item.count;
        }
      });
    },
    add: (state: IState, { payload }: PayloadAction<string>) => {
      state.data.map((item) => {
        if (item.id === payload) {
          return (item.count += 1);
        } else {
          return item.count;
        }
      });
    },
    subtract: (state: IState, { payload }: PayloadAction<number>) => {
      if (state.data[payload].count > 0) {
        state.data[payload].count -= 1;
      } else {
        state.data[payload].count = 0;
      }
    },
  },
});

export const {
  select: selectItem,
  remove: removeItem,
  add: addItem,
  subtract: subtractItem,
} = cartSlice.actions;

const reducer = {
  cart: cartSlice.reducer,
};

export const store = configureStore({
  reducer,
});
