import React from 'react';
import { StyledNav, StyledNavLink } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

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
            <button onClick={() => dispatch(logoutThunk())}>Exit</button>
          </>
        )}
      </StyledNav>
    </>
  );
};

export default Navigation;
