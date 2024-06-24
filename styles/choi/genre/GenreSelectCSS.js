
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
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const Title = styled.div`
  width: 241px;
  height: 36px;
  font-size: 30px;
  color: #FFFFFF;
`

export const Genre_box = styled.div`
  width: 1030px;
  height: 310px;
`

export const Horror_box = styled.div`
  width: 309px;
  height: 130px;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
`

export const Crime_box = styled.div`
  width: 309px;
  height: 130px;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
`

export const Action_box = styled.div`
  width: 309px;
  height: 130px;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
`

export const Romance_box = styled.div`
  width: 309px;
  height: 130px;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
`

export const Comic_box = styled.div`
  width: 309px;
  height: 130px;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
`

export const Animation_box = styled.div`
  width: 309px;
  height: 130px;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
`