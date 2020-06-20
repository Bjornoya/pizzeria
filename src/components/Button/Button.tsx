import React from 'react';
import clsx from 'clsx';
import style from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: IButtonProps) => {
  const className = clsx(style.button, {
    [style.disabled]: disabled,
  });

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
