import { addItem, removeItem, subtractItem } from '../store';

export const onAdd = (dispatch: any, id: string) => {
  dispatch(addItem(id));
};

export const onDelete = (dispatch: any, id: string) => {
  dispatch(removeItem(id));
};

export const onSubtract = (dispatch: any, id: string) => {
  dispatch(subtractItem(id));
};
