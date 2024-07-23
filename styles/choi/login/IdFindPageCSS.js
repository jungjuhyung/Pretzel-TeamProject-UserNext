// IdFindCSS.js

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
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
`;

export const IdFindBox = styled.div`
  background-color : #252525;
  width : 450px;
  height : 410px;
  display:flex;
  flex-direction: column;
  align-items: center;
  border-radius : 5px;
`
export const Title = styled.div`
  width : 137px;
  height : 36px;

  font-size : 29px;
  font-family: 'Pretendard-Regular', sans-serif;
  font-weight: 600;
  color : #FFFFFF;
  margin-top:67px;
`

export const SubTitle = styled.div`
  width:269px;
  height:18px;

  font-family: 'Pretendard-Regular', sans-serif;
  font-weight: lighter;
  color : #FFFFFF;
  font-size : 14px;
  margin-top : 30px;
`

export const NameBox = styled.input`
  width:300px;
  height:50px;
  border-radius: 5px;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size : 17px;
  
  margin-top : 11px;
  padding : 15px 0px 15px 15px;
  border: none;
`

export const EmailBox = styled.input`
width:300px;
height:50px;
border-radius: 5px;
font-family: 'Pretendard-Regular', sans-serif;
font-size : 17px;

margin-top : 11px;
padding : 15px 0px 15px 15px;
border: none;
`

export const OkButton = styled.input`
  width:300px;
  height:50px;
  border-radius: 50px;
  background-color : #F29A2E;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size : 20px;
  font-weight : 500;
  text-align: center;
  color: #FFFFFF;
  margin-top : 20px;
  border: none;
`
