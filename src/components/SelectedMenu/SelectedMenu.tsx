import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedItemsData, getDeliveryPrice } from '../../utils/selectors';
import { IData } from '../../store';
import { onAdd, onDelete, onSubtract } from '../../utils/functions';
import SelectedMenuItem from './SelectedMenuItem/SelectedMenuItem';
import style from './SelectedMenu.module.scss';

const SelectedMenu = () => {
  const dispatch = useDispatch();
  const data = useSelector(getSelectedItemsData);
  const delivery = useSelector(getDeliveryPrice);

  return (
    <>
      <div>Total: </div>
      {data.map((item: IData, index: number) => {
        return (
          <div className={style.itemWrapper}>
            <SelectedMenuItem
              photo={item.photo}
              title={item.title}
              price={item.price}
              description={item.description}
              id={item.id}
              count={item.count}
              onDelete={() => onDelete(dispatch, item.id)}
              onAdd={() => onAdd(dispatch, item.id)}
              onSubtract={() => onSubtract(dispatch, index)}
              key={item.id}
            />
          </div>
        );
      })}
      <div>Delivery costs: {delivery} €</div>
    </>
  );
};

export default SelectedMenu;
