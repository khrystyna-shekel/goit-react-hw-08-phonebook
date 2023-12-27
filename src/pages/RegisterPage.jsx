import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/auth/operations';

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const sumbit = data => {
    dispatch(registerThunk(data));
  };
  return (
    <>
      <form onSubmit={handleSubmit(sumbit)}>
        <label htmlFor="name_reg">
          Name
          <input {...register('name')} type="text" name="name" id="name_reg" />
        </label>
        <label htmlFor="email_reg">
          Email
          <input
            {...register('email')}
            type="text"
            name="email"
            id="email_reg"
          />
        </label>
        <label htmlFor="password_reg">
          Password
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password_reg"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
