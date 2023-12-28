import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = () => {
  return (
    <StyledSection>
      <h1>Sorry, page is not found!</h1>
      <StyledLink to="/">Go to homepage</StyledLink>
    </StyledSection>
  );
};

const StyledSection = styled.main`
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

const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  font-style: oblique;
  color: rgb(161, 161, 218);

  &:hover {
    text-decoration: underline;
  }
`;
