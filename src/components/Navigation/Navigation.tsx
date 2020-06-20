import React from 'react';
import NavItem from './NavItem/NavItem';
import style from './Navigation.module.scss';

const data = [
  { name: 'Napoletana', url: '/', key: 'pizza_ab' },
  { name: 'alla Pala', url: '/', key: 'pizza_cd' },
  { name: 'Tonda Romana', url: '/', key: 'pizza_ef' },
  { name: 'al Taglio', url: '/', key: 'pizza_gh' },
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
