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
  height: 869px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const Genre_box = styled.div`
  width: 973px;
  height: 310px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-top: 68px;
`

export const Title = styled.div`
  margin-top: 100px;
  width: 241px;
  height: 36px;
  font-size: 30px;
  color: #FFFFFF;
  text-align: center;
`

export const Payment = styled.div`
  width: 462px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #FFFFFF;
  background-color: #3d3d3d;
  border-radius: 5px;
`

export const Error = styled.div`
  width: 462px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #FFFFFF;
  background-color: #3d3d3d;
  border-radius: 5px;
`

export const Rate_Plan = styled.div`
  width: 462px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #FFFFFF;
  background-color: #3d3d3d;
  border-radius: 5px;
`

export const Inquiry = styled.div`
  width: 462px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #FFFFFF;
  background-color: #3d3d3d;
  border-radius: 5px;
`

export const Inquiry_Button = styled.input`
  margin-top: 50px;
  width: 318px;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background-color: #F29A2E;
  font-size: 30px;
  font-weight: bold;
  border-radius: 50px;
  border: none;
`


