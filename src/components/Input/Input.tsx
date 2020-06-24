import React from 'react';
import style from './Input.module.scss';

export interface InputProps {
  name?: string;
  value: string;
  placeholder?: string;
  onChange: () => void;
}

const Input = ({ name, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      className={style.input}
      onChange={onChange}
      autoComplete="off"
      type="text"
    />
  );
};

export default Input;
