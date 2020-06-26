import React from 'react';
import style from './Error.module.scss';

const Error = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.page}>{children}</div>;
};

export default Error;
