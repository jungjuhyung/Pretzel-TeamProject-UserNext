import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular', sans-serif;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const Title = styled.div`
  width: auto;
  height: 36px;
  font-size: 30px;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 45px;
`

export const Genre_box = styled.div`
  width: 90%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  margin-top: 70px;
`

export const Contents_box = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Contetns_Poster = styled.img`
  width: 250px;
  height: 375px;
  margin-bottom: 1vh;

`

export const Contents_title = styled.div`
  color: #FFFFFF;
  font-size: 24px;
  width: auto;
  height: auto;
`
