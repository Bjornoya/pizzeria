import React from 'react';
import clsx from 'clsx';
import style from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  text?: boolean;
}

const Button = ({ children, onClick, disabled, text }: IButtonProps) => {
  const className = clsx(style.button, {
    [style.disabled]: disabled,
    [style.text]: text,
  });

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
