import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import fireDb from '../../firebase';
import Input from '../Input/Input';
import Button from '../Button/Button';
import style from './LoginForm.module.scss';

const auth = fireDb.auth();

const LoginForm = ({ history }: { history: any }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    const response = auth.signInWithEmailAndPassword(data.email, data.password);
    response.catch((error) => console.log(error.message));
    history.replace('/');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.row}>
        <Input
          name="email"
          placeholder="Your e-mail*"
          ref={register({
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
            maxLength: { value: 26, message: 'Too long' },
          })}
        />
        {errors.email && <span className={style.err}>{errors.email.message}</span>}
      </div>
      <div className={style.row}>
        <Input
          name="password"
          placeholder="Your password*"
          ref={register({
            required: 'This field is required',
            maxLength: { value: 16, message: 'Too long' },
          })}
        />
        {errors.password && <span className={style.err}>{errors.password.message}</span>}
      </div>
      <Button children="Login" />
    </form>
  );
};

export default withRouter(LoginForm);
