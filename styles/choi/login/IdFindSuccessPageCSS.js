// IdFindSuccessCSS.js

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
  background-color: black;
  width: 100%;
  height: 1080px;
  display: flex;
  
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const FindSuccessBox = styled.div`
  background-color : #252525;
  width : 450px;
  height : 444px;

  display: flex;
  flex-direction: column;
  align-items: center;

`
export const IconBox = styled.div`
  width : 50px;
  height : 50px;
  margin-top : 69px;
`

export const Icon = styled.img`
  width: 50px;
  height : 50px;
`


export const Title = styled.div`
  width : 391px;
  height : 33px;
  font-weight : 600;
  font-size : 28px;
  color : #FFFFFF;
  margin-top : 30px;
  text-align: center;
`

export const Result = styled.div`
  width : 300px;
  height : 50px;
  background-color : #3B3B3B;
  margin-top : 33px;
  padding : 15px 0px 15px 13px;
  font-size:17px;
  color : #FFFFFF;
  border-radius: 5px;
` 
export const SubTitle = styled.div`
  width : 301px;
  height : 18px;
  text-align: center;
  color : #929292;
  font-size: 15px;
  margin-top: 15px;
`
export const MoveLogin = styled.input`
  width: 300px;
  height : 50px;
  background-color : #F29A2E;
  color: #FFFFFF;
  text-align  : center;
  font-size:20px;
  font-weight:500;
  margin-top: 26px;
  border-radius: 50px;
`
