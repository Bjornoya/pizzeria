import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import fireDb from '../../firebase';
import Input from '../Input/Input';
import Button from '../Button/Button';
import style from './LoginForm.module.scss';

const auth = fireDb.auth();

const LoginForm = ({ history }: { history: any }) => {
  const { register, handleSubmit, errors } = useForm();
  const [errLogin, setErrLogin] = useState('');
  const onSubmit = (data: any) => {
    const response = auth.signInWithEmailAndPassword(data.email, data.password);
    response.then(() => history.replace('/'));
    response.catch((error) => setErrLogin(error.message));
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
          onFocus={() => errLogin && setErrLogin('')}
        />
        {errors.email && <span className={style.err}>{errors.email.message}</span>}
      </div>
      <div className={style.row}>
        <Input
          name="password"
          placeholder="Your password*"
          type="password"
          ref={register({
            required: 'This field is required',
            maxLength: { value: 16, message: 'Too long' },
          })}
          onFocus={() => errLogin && setErrLogin('')}
        />
        {errors.password && <span className={style.err}>{errors.password.message}</span>}
      </div>
      <Button children="Login" />
      <span className={style.formErr}>{errLogin}</span>
    </form>
  );
};

export default withRouter(LoginForm);
