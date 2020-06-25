import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedItemsData, getSelectedItems } from '../../utils/selectors';
import { removeItem } from '../../store';
import { IData } from '../../store';
import SelectedMenuItem from './SelectedMenuItem/SelectedMenuItem';
import style from './SelectedMenu.module.scss';

const SelectedMenu = () => {
  const data = useSelector(getSelectedItemsData);
  const count = useSelector(getSelectedItems);
  const dispatch = useDispatch();

  const onDelete = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {data.map((item: IData) => {
        // temporary solution
        let calculatedData: any = {};
        count.forEach((i: string) => {
          calculatedData[i] = (calculatedData[item.id] || 0) + 1;
        });
        return (
          <div className={style.itemWrapper}>
            <SelectedMenuItem
              photo={item.photo}
              title={item.title}
              price={item.price}
              description={item.description}
              id={item.id}
              count={calculatedData[item.id]}
              onDelete={() => onDelete(item.id)}
              key={item.id}
            />
          </div>
        );
      })}
    </>
  );
};

export default SelectedMenu;
