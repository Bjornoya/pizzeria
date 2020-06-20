import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavItem.module.scss';

interface INavLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  url: string;
}

const NavItem = ({ children, onClick, url }: INavLinkProps) => {
  return (
    <NavLink className={style.navItem} to={url}>
      {children}
    </NavLink>
  );
};

export default NavItem;
