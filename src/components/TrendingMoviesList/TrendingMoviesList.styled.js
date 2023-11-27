import styled from 'styled-components';
export const TrendingList = styled.ul`
  display: flex;

  flex-direction: column;
  list-style-type: disc;
  gap: 0.3rem;
  padding-left: 30px;
  > li {
    font-size: x-large;
    > a {
      display: flex;
      align-items: center;
    }
  }
`;
export const ImgPoster = styled.img`
  border-radius: 0.2rem;
  object-fit: cover;
  width: 2rem;
  height: 3rem;
`;
export const TitleTrending = styled.p`
  margin-left: 1rem;
`;