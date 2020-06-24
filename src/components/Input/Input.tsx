import React from 'react';
import style from './Input.module.scss';

export interface InputProps {
  name?: string;
  placeholder?: string;
}

const Input = React.forwardRef(({ name, placeholder }: InputProps, ref: any) => (
  <input
    name={name}
    placeholder={placeholder}
    className={style.input}
    autoComplete="off"
    type="text"
    ref={ref}
  />
));

export default Input;
