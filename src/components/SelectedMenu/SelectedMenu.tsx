import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSelectedItemsData,
  getDeliveryPrice,
  getTotalCountWithDelivery,
  getTotalCountUsd,
  getItemsCount,
} from '../../utils/selectors';
import { IData } from '../../store';
import { onAdd, onDelete, onSubtract } from '../../utils/functions';
import SelectedMenuItem from './SelectedMenuItem/SelectedMenuItem';
import style from './SelectedMenu.module.scss';
import empty from '../../assets/img/empty.png';

const SelectedMenu = () => {
  const dispatch = useDispatch();
  const data = useSelector(getSelectedItemsData);
  const basketCount = useSelector(getItemsCount);
  const total = useSelector(getTotalCountWithDelivery);
  const totalUsd = useSelector(getTotalCountUsd);
  const delivery = useSelector(getDeliveryPrice);

  if (basketCount) {
    return (
      <>
        <div className={style.total}>
          Total: {total} € | {totalUsd} $
        </div>
        {data.map((item: IData) => {
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
                onSubtract={() => onSubtract(dispatch, item.id)}
                key={item.id}
              />
            </div>
          );
        })}
        <div className={style.delivery}>Delivery costs: {delivery} €</div>
      </>
    );
  } else {
    return <img className={style.empty} src={empty} alt="Error cart" />;
  }
};

export default SelectedMenu;
