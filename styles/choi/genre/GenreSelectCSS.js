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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; /* 필요에 따라 조정 가능 */
  margin-top: 68px;
`

export const Horror_box = styled.div`
  width: 310px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Crime_box = styled.div`
  width: 310px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Action_box = styled.div`
  width: 310px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Romance_box = styled.div`
  width: 310px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Comic_box = styled.div`
  width: 310px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const Animation_box = styled.div`
  width: 310px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`
