
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
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const JoinBox = styled.div`
  width : 450px;
  height : 1124px;
  background-color : #252525;
  display:flex;
  flex-direction : column;
  align-items: center;
  
`

export const Title = styled.div`
  width : 104px;
  height : 36px;
  color : #FFFFFF;
  font-size : 30px;
  font-weight : 600;
  margin-top : 30px;
`

export const Name = styled.input`
  width : 300px;
  height : 50px;
  border-radius : 5px;
  padding : 15px 0px 15px 15px;
  margin-top : 58px;
`

export const Id = styled.input`
  width : 300px;
  height : 50px;
  border-radius : 5px;
  padding : 15px 0px 15px 15px;
  margin-top : 45px;
`

export const IdCondition = styled.span`
  width : 265px;
  height : 16px;
  font-size : 13px;
  color : #c8c8c8;
  margin-top : 5px;
  margin-left : -30px;
`

export const PassWord = styled.input`
  width : 300px;
  height : 50px;
  border-radius : 5px;
  padding : 15px 0px 15px 15px;
  margin-top : 35px;
`

export const PwCondition = styled.div`
  width : 276px;
  height : 16px;
  color : #c8c8c8;
  font-size : 13px;
  margin-top : 5px;
  margin-left : -20px;
`

export const Re_PassWord = styled.input`
  width : 300px;
  height : 50px;
  border-radius : 5px;
  padding : 15px 0px 15px 15px;
  margin-top : 15px;
`

export const Error = styled.div`
  width : 82px;
  height : 16px;
  font-size : 13px;
  color : red;
  margin-top : 5px;
  margin-left : -210px;
`


export const Ok = styled.div`
  width : 82px;
  height : 16px;
  font-size : 13px;
  color : green;
  margin-top : 5px;
  margin-left : -210px;
`

export const Email_Box = styled.div`
  width: 300px;
  height : 50px;
  display : flex;
  justify-content: center;
  margin-top : 45px;
`

export const Email = styled.input`
  width : 150px;
  height : 50px;
  padding : 15px 0px 15px 15px;
  font-size : 17px;
`

export const Icon = styled.div`
  width: 40px;
  height : 50px;
  display : flex;
  justify-content: center;
  align-items: center;
  font-size : 20px;
  color: #FFFFFF;
`

export const Email_select = styled.select`
  width:130px;
  height : 50px;
  padding : 15px 0px 15px 15px;
`