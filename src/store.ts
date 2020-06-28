import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fireDb from './firebase';

export interface IData {
  photo: string;
  title: string;
  price: number;
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

interface IAuthState {
  isAuth: boolean;
}

export const initialState: IState = {
  data: [
    {
      photo: '',
      title: '',
      price: 0,
      count: 0,
      description: '',
      id: '',
    },
  ],
  isLoading: false,
  error: null,
  selectedItems: [],
  delivery: 5,
};

export const authState: IAuthState = {
  isAuth: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
    subtract: (state: IState, { payload }: PayloadAction<string>) => {
      state.data.map((item) => {
        if (item.id === payload) {
          if (item.count > 0) {
            return (item.count -= 1);
          } else {
            return (item.count = 0);
          }
        } else {
          return item;
        }
      });
    },
    request: (state: IState) => {
      state.isLoading = true;
      state.error = null;
    },
    success: (state: IState, { payload }: PayloadAction<IData[]>) => {
      state.data = payload;
      state.isLoading = false;
    },
    failure: (state: IState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    login: (state: IAuthState, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

export const fetchPizzas = () => async (dispatch: Function) => {
  dispatch(request());
  let ref = fireDb.database().ref('/data');
  ref.on('value', (snapshot) => {
    const state = snapshot.val();
    if (state) {
      dispatch(success(state));
    } else {
      dispatch(failure('Error'));
    }
  });
};

export const {
  remove: removeItem,
  add: addItem,
  subtract: subtractItem,
  request,
  success,
  failure,
} = cartSlice.actions;

export const { login: loginFirebase } = authSlice.actions;

const reducer = {
  cart: cartSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer,
});
