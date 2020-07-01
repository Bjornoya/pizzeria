import React from 'react';
import NavItem from './NavItem/NavItem';
import style from './Navigation.module.scss';

const data = [
  { name: 'Pizza', url: '/', key: 'pizza_ab' },
  { name: 'About Us', url: '/about', key: 'pizza_cd' },
  { name: 'Orders History', url: '/history', key: 'pizza_cbgb' },
];

interface INavigationProps {
  isAuth: boolean;
}

const Navigation = ({ isAuth }: INavigationProps) => {
  return isAuth ? (
    <div className={style.navigation}>
      {data.map((item) => (
        <NavItem key={item.key} url={item.url}>
          {item.name}
        </NavItem>
      ))}
    </div>
  ) : (
    <div className={style.navigation}>
      {data
        .filter((item) => item.url !== '/history')
        .map((filteredItem) => (
          <NavItem key={filteredItem.key} url={filteredItem.url}>
            {filteredItem.name}
          </NavItem>
        ))}
    </div>
  );
};

export default Navigation;
