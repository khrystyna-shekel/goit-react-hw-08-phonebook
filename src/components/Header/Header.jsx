import React from 'react';
import { StyledHeader } from './Header.styled';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';

export const Header = ({ title }) => {
  const user = useSelector(selectUserName);

  return (
    <StyledHeader>
      {user && <h1>Welcome, {user}!</h1>}
      {!user && <h1>{title ? title : 'Phonebook'}</h1>}
      <Navigation />
    </StyledHeader>
  );
};
