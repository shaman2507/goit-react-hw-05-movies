import styled from 'styled-components';

export const NotFoundBlock = styled.div`
  margin: 1rem auto;
  font-weight: 500;
  text-align: center;
  &::after {
    content: url('https://cdn.iconscout.com/icon/free/png-512/free-error-2689537-2232197.png?f=avif&w=256');
    display: block;
    text-align: center;
  }
`;
