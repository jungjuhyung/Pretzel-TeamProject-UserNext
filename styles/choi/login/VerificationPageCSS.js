
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

export const VerificationBox = styled.div`
  width : 450px;
  height : 366px;
  background-color : #252525;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width : 163px;
  height : 36px;
  color : #FFFFFF;
  font-size : 29px;
  font-weight : 600;
  margin-top : 70px;
`

export const SubTitle = styled.div`
  width : 240px;
  height : 18px;
  margin-top: 30px;
  color : #FFFFFF;
  font-size : 15px;
  font-weight : 400;
`
export const Verification = styled.input`
  width: 300px;
  height : 50px;
  border-radius : 5px;
  margin-top : 11px;
  padding : 15px 0px 15px 15px;
  color : #C8C8C8;
  border: none;
`
export const ButtonBox = styled.div`
  width : 300px;
  height : 50px;
  display: flex;
  justify-content: space-around;
  margin-top : 30px;
`


export const OkButton = styled.input`
  background-color : #F29A2E;
  width: 99px;
  height : 50px;
  color : #FFFFFF;
  text-align : center;
  font-weight : 400;
  border-radius : 50px;
  border: none;
`

export const Re_send = styled.input`
  background-color : #3D3D3D;
  width: 192px;
  height : 50px;
  border-radius : 50px;
  color : #FFFFFF;
  font-weight : 400;
  border: none;

`