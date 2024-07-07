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
  height: 547px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
  background-color: black;
`;

export const Title = styled.div`
  width: auto;
  height: 36px;
  font-size: 30px;
  color: #FFFFFF;
`

export const Genre_box = styled.div`
  width: 90%;
  height: 310px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; /* 필요에 따라 조정 가능 */
  margin-top: 68px;
`

export const Contents_box = styled.div`
  width: 250px;
  height: 375px;
  border: 1px solid white;
`