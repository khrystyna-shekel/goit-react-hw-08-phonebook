import React from 'react';
import { StyledNav, StyledNavLink } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import styled from 'styled-components';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        {!isLoggedIn && (
          <>
            <StyledNavLink to="/register">Sign Up</StyledNavLink>
            <StyledNavLink to="/login">Log In</StyledNavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <StyledExit onClick={() => dispatch(logoutThunk())}>
              Exit
            </StyledExit>
          </>
        )}
      </StyledNav>
    </>
  );
};

export default Navigation;

const StyledExit = styled.button`
  cursor: pointer;
  border: none;

  font-size: 18px;

  width: 120px;
  height: 30px;
  padding: 4px 6px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);

  font-weight: 700;
  background-color: lavenderblush;
  color: rgb(161, 161, 218);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(161, 161, 218);
    color: lavenderblush;
    scale: 1.1;
  }
`;
