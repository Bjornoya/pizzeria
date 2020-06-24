import React from 'react';
import style from './TextArea.module.scss';
import { InputProps } from '../Input/Input';

interface ITextAreaProps extends InputProps {
  rows: number;
}

const TextArea = React.forwardRef(({ rows, name, placeholder }: ITextAreaProps, ref: any) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={style.textarea}
      rows={rows}
      autoComplete="off"
      ref={ref}
    >
      {' '}
    </textarea>
  );
});

export default TextArea;
