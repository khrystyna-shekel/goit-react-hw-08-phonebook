import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  min-height: 60px;
  background-color: lavender;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);

  & h1 {
    color: rgb(161, 161, 218);
    font-style: italic;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  color: rgb(161, 161, 218);
  font-style: oblique;

  &.active {
    text-decoration: underline;
  }
`;
