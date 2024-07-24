
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

export const PwFindBox = styled.div`
  width : 450px;
  height : 395px;
  background-color : #252525;
  display:flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`

export const Title = styled.div`
  width: 163px;
  height : 36px;
  font-size : 29px;
  font-weight : 600;
  color : #FFFFFF;
  text-align : center;
  margin-top : 50px;
  
`

export const SubTitle = styled.div`
  width: 300px;
  height : 36px;
  font-size : 15px;
  color: #FFFFFF;
  text-align: center;
  margin-top:30px;
`

export const Id = styled.input`
  width: 300px;
  height : 50px;
  border-radius : 5px;
  padding : 15px 0px 15px 15px;
  margin-top : 15px;
  font-size : 17px;
  border: none;
  font-family: 'Pretendard-Regular', sans-serif;

`

export const Email = styled.input`
  width: 300px;
  height : 50px;
  border-radius : 5px;
  padding : 15px 0px 15px 15px;
  margin-top : 15px;
  font-size : 17px;
  border: none;
  font-family: 'Pretendard-Regular', sans-serif;

`



export const OkButton = styled.input`
  width: 300px;
  height : 50px;
  background-color : #F29A2E;
  border-radius : 50px;
  font-size : 20px;
  color : #FFFFFF;
  text-align : center;
  margin-top : 20px;
  border: none;
  font-family: 'Pretendard-Regular', sans-serif;
  cursor: pointer;
`