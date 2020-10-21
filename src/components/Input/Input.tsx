import React from 'react';
import style from './Input.module.scss';

export interface InputProps {
  name?: string;
  placeholder?: string;
  type?: string;
  onFocus?: () => void;
}

const Input = React.forwardRef(({ name, placeholder, type, onFocus }: InputProps, ref: any) => (
  <input
    name={name}
    placeholder={placeholder}
    className={style.input}
    autoComplete="off"
    type={type || 'text'}
    ref={ref}
    onFocus={onFocus}
  />
));

export default Input;
