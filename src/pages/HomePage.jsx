import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../redux/auth/selectors';
import { StyledNavLink } from 'components/Header/Header.styled';
import styled from 'styled-components';

const HomePage = () => {
  const user = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <StyledWrapper>
        <h1>My phonebook {user}</h1>
        {isLoggedIn ? (
          <StyledNavLink to="/contacts">My contacts</StyledNavLink>
        ) : (
          <StyledLinks>
            <StyledNavLink to="/register">Sign Up</StyledNavLink>
            <StyledNavLink to="/login">Log In</StyledNavLink>
          </StyledLinks>
        )}
      </StyledWrapper>
    </div>
  );
};

export default HomePage;

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 36px;
    color: rgb(161, 161, 218);
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
