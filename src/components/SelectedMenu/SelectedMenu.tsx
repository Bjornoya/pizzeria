import React from 'react';
import SelectedMenuItem from './SelectedMenuItem/SelectedMenuItem';
import style from './SelectedMenu.module.scss';

const data = [
  {
    image: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    name: 'Carbonara',
    size: 'Small, 25sm, traditional',
    count: '0',
    price: '4.47€',
  },
  {
    image: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    name: 'Carbonara',
    size: 'Small, 25sm, traditional',
    count: '0',
    price: '4.47€',
  },
  {
    image: 'https://static.pizzasushiwok.ru/images/menu_new/6-1300.jpg',
    name: 'Carbonara',
    size: 'Small, 25sm, traditional',
    count: '0',
    price: '4.47€',
  },
];

const SelectedMenu = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className={style.itemWrapper}>
            <SelectedMenuItem
              image={item.image}
              name={item.name}
              size={item.size}
              count={item.count}
              price={item.price}
            />
          </div>
        );
      })}
    </>
  );
};

export default SelectedMenu;
