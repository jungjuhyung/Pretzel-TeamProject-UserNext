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
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const PwResetBox = styled.div`
  width : 450px;
  height : 497px;
  background-color : #252525;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width : 189px;
  height : 36px;
  font-size : 30px;
  color:#FFFFFF;
  font-weight : 600;
  margin-top : 83px;
  text-align : center;
`

export const SubTitle = styled.div`
  width : 269px;
  height : 18px;
  color : #FFFFFF;
  margin-top : 30px;
  font-size : 15px;
  text-align : center;
`

export const NewPassWord = styled.input`
  width : 300px;
  height : 50px;
  padding : 15px 0px 15px 15px;
  font-size : 17px;
  border-radius : 5px;
  margin-top : 11px;
  border: none;
`

export const SubText = styled.div`
  width : 276px;
  height : 16px;
  color : #929292;
  font-size : 13px;
  margin : 5px 0px 0px -16px;
`

export const Re_NewPassWord = styled.input`
  width : 300px;
  height : 50px;
  padding : 15px 0px 15px 15px;
  border-radius : 5px;
  font-size : 17px;
  margin-top : 14px;
  border: none;
`

export const Error = styled.div`
  width:82px;
  height:16px;
  color : #FF4848;
  margin : 5px 0px 0px -210px;
  font-size : 13px;
`

export const Ok = styled.div`
  width:82px;
  height:16px;
  color : green;
  margin : 5px 0px 0px -210px;
  font-size : 13px;
`

export const OkButton = styled.input`
  width : 300px;
  height : 50px;
  margin-top : 30px;
  background-color : #F29A2E;
  border-radius : 50px;
  font-size : 20px;
  text-align : center;
  color: #FFFFFF;
  border: none;

`

