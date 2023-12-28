import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/auth/operations';
import {
  StyledBtn,
  StyledInput,
  StyledLabel,
} from 'components/ContactForm/ContactForm.styled';
import styled from 'styled-components';
import { toast } from 'react-toastify';

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const sumbit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        toast.success(`Welcome!`);
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };
  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit(sumbit)}>
        <StyledLabel htmlFor="name_reg">
          Name
          <StyledInput
            {...register('name')}
            type="text"
            name="name"
            id="name_reg"
          />
        </StyledLabel>
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
        <StyledBtn type="submit">Sign Up</StyledBtn>
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
