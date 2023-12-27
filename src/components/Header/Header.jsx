import React from 'react';
import { StyledHeader } from './Header.styled';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';

export const Header = () => {
  const user = useSelector(selectUserName);
  return (
    <StyledHeader>
      <h1>Phonebook</h1>
      {user && <h2>Welcome, {user}</h2>}
      <Navigation />
    </StyledHeader>
  );
};
