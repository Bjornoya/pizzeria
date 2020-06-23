import React from 'react';
import style from './MainLayout.module.scss';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.layout}>{children}</div>;
};

export default MainLayout;
