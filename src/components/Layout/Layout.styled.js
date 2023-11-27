import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  padding: 0.5rem 0;
  height: 3rem;
  border-bottom: 0.2rem solid rgba(0, 0, 0, 0.3);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  margin: 0.2rem 1rem 0.2rem 0;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
    &:hover {
      border-bottom: 0.2rem solid orangered;
    }
  }
  &:hover {
    border-bottom: 0.2rem solid black;
  }
`;