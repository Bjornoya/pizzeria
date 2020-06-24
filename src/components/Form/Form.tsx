import React from 'react';
import style from './Form.module.scss';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

interface IFormProps {
  onSubmit: () => void;
  onChange: () => void;
}

const Form = ({ onSubmit, onChange }: IFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={style.row}>
          <Input name="street" value="" placeholder="Street" onChange={onChange} />
        </div>
        <div className={style.row}>
          <Input name="apt" value="" placeholder="Apartment" onChange={onChange} />
        </div>
        <div className={style.row}>
          <Input name="porch" value="" placeholder="Porch" onChange={onChange} />
        </div>
        <div className={style.row}>
          <Input name="floor" value="" placeholder="Floor" onChange={onChange} />
        </div>
        <div className={style.row}>
          <TextArea rows={7} name="comment" value="" placeholder="Comment" onChange={onChange} />
        </div>
        <div className={style.footer}>
          <Button children="Confirm order" />
        </div>
      </form>
    </div>
  );
};

export default Form;
