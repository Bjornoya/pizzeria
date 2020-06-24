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
        <div className={style.rowWrapper}>
          <div className={`${style.row} ${style.separator}`}>
            <Input
              name="firstName"
              placeholder="First Name*"
              ref={register({
                required: 'This field is required',
                pattern: { value: /^[A-Za-z]+$/i, message: 'Should contain only letters' },
                maxLength: { value: 16, message: 'Too long' },
              })}
            />
            {errors.firstName && <span className={style.err}>{errors.firstName.message}</span>}
          </div>
          <div className={style.row}>
            <Input
              name="lastName"
              placeholder="Last Name"
              ref={register({
                pattern: { value: /^[A-Za-z]+$/i, message: 'Should contain only letters' },
                maxLength: { value: 16, message: 'Too long' },
              })}
            />
            {errors.lastName && <span className={style.err}>{errors.lastName.message}</span>}
          </div>
        </div>
        <div className={style.row}>
          <Input
            name="street"
            placeholder="Street*"
            ref={register({
              required: 'This field is required',
              minLength: { value: 6, message: 'Too short' },
            })}
          />
          {errors.street && <span className={style.err}>{errors.street.message}</span>}
        </div>
        <div className={style.rowWrapper}>
          <div className={`${style.row} ${style.separator}`}>
            <Input
              name="apt"
              placeholder="Apartment*"
              ref={register({ required: 'This field is required' })}
            />
            {errors.apt && <span className={style.err}>{errors.apt.message}</span>}
          </div>
          <div className={`${style.row} ${style.separator}`}>
            <Input name="porch" placeholder="Porch" ref={register} />
            {errors.porch && <span className={style.err}>{errors.porch.message}</span>}
          </div>
          <div className={style.row}>
            <Input
              name="floor"
              placeholder="Floor*"
              ref={register({
                required: 'This field is required',
                pattern: { value: /^[0-9]+$/i, message: 'Should contain only numbers' },
              })}
            />
            {errors.floor && <span className={style.err}>{errors.floor.message}</span>}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.label}>Comment</div>
          <TextArea rows={7} name="comment" placeholder="Comment" ref={register} />
        </div>
        <div className={style.footer}>
          {/*TODO: if basket is empty, disable button. May be add info about * is required*/}
          <Button children="Confirm order" />
        </div>
      </form>
    </div>
  );
};

export default Form;
