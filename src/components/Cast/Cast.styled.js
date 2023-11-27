import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.1rem 0;

  > li {
    /* display: flex; */
    font-size: small;
    /* background-color: rgba(0, 0, 0, 0.05); */
    padding: 0.5rem;
  }
`;

export const CastText = styled.p`
  margin: 0.3rem 0;
  width: 100px;
  > span {
    display: block;
    font-weight: 700;
    margin-right: 0.2rem;
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