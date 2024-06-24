
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
  
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const FindFailBox = styled.div`
  width : 450px;
  height : 315px;
  background-color : #252525;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.img`
  width: 50px;
  height : 50px;
  margin-top : 62px;
`

export const Title = styled.div`
  width : 277px;
  height : 32px;
  font-size : 26px;
  font-weight : 600;
  color: #FFFFFF;
  margin-top : 30px;
`

export const CheckButton = styled.input`
  width : 300px;
  height : 50px;
  background-color : #F29A2E;
  color : #FFFFFF;
  margin-top : 30px;
  border-radius : 50px;
  text-align : center;
  font-size:20px;
  border: none;
`
