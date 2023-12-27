import React from 'react';
import { StyledHeader, StyledNav, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Phonebook</h1>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  );
};
