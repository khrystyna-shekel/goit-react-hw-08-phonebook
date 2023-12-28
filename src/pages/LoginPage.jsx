import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sumbit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}!`);
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(sumbit)}>
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
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
