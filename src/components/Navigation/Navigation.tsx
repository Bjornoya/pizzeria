import React from 'react';
import NavItem from './NavItem/NavItem';
import style from './Navigation.module.scss';

const data = [
  { name: 'Pizza', url: '/', key: 'pizza_ab' },
  { name: 'About Us', url: '/about', key: 'pizza_cd' },
  { name: 'Orders History', url: '/history', key: 'pizza_cbgb' },
];

const Navigation = () => {
  return (
    <div className={style.navigation}>
      {data.map((item) => (
        <NavItem key={item.key} url={item.url}>
          {item.name}
        </NavItem>
      ))}
    </div>
  );
};

export default Navigation;
