import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/operations';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import {
  StyledBtn,
  StyledInput,
  StyledLabel,
} from 'components/ContactForm/ContactForm.styled';

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

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
    <StyledSection>
      <StyledForm onSubmit={handleSubmit(sumbit)}>
        <StyledLabel htmlFor="email_reg">
          Email
          <StyledInput
            {...register('email')}
            type="text"
            name="email"
            id="email_reg"
          />
        </StyledLabel>
        <StyledLabel htmlFor="password_reg">
          Password
          <StyledInput
            {...register('password')}
            type="password"
            name="password"
            id="password_reg"
          />
        </StyledLabel>
        <StyledBtn type="submit">Log In</StyledBtn>
      </StyledForm>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  box-shadow: 5px 6px 12px rgb(204, 203, 203);
  border-radius: 5px;
`;
