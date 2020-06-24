import React from 'react';
import { useForm } from 'react-hook-form';
import style from './Form.module.scss';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.row}>
          <Input
            name="street"
            placeholder="Street"
            ref={register({
              required: 'This field is required',
              minLength: { value: 6, message: 'Too short' },
            })}
          />
          {errors.street && <span className={style.err}>{errors.street.message}</span>}
        </div>
        <div className={style.row}>
          <Input
            name="apt"
            placeholder="Apartment"
            ref={register({ required: 'This field is required' })}
          />
          {errors.apt && <span className={style.err}>{errors.apt.message}</span>}
        </div>
        <div className={style.row}>
          <Input
            name="porch"
            placeholder="Porch"
            ref={register({ required: 'This field is required' })}
          />
          {errors.porch && <span className={style.err}>{errors.porch.message}</span>}
        </div>
        <div className={style.row}>
          <Input
            name="floor"
            placeholder="Floor"
            ref={register({ required: 'This field is required' })}
          />
          {errors.floor && <span className={style.err}>{errors.floor.message}</span>}
        </div>
        <div className={style.row}>
          <TextArea rows={7} name="comment" placeholder="Comment" ref={register} />
        </div>
        <div className={style.footer}>
          {/*TODO: if basket is empty, disable button*/}
          <Button children="Confirm order" />
        </div>
      </form>
    </div>
  );
};

export default Form;
