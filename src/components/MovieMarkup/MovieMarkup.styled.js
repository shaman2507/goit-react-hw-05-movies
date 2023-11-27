import styled from 'styled-components';

export const Movie = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;

  > img {
    height: 300px;
    width: 200px;
  }
`;

export const MovieTitle = styled.h3`
  margin-top: 1rem;
`;
export const MovieText = styled.div`
  margin-bottom: 1rem;
  > span {
    display: block;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;
export const MovieAddInfo = styled.div`
  padding: 1rem 0.2rem;
  border-bottom: 0.2rem solid rgba(0, 0, 0, 0.3);
  border-top: 0.2rem solid rgba(0, 0, 0, 0.3);
  > ul > li {
    margin: 0 0 0.5rem 1rem;
  }
`;