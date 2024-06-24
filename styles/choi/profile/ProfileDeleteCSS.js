import { css } from '@emotion/react';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';

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
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.div`
  width: 137px;
  height: 36px;
  font-size: 29px;
  color: #FFFFFF;
  font-weight: 800;
`

export const Profile_Delete_Box = styled.div`
  margin-top: 89px;
  width: 450px;
  height: 366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252525;
  border-radius: 5px;
`

export const SubTitle = styled.div`
  margin-top: 70px;
  width: 163px;
  height: 36px;
  font-size: 29px;
  font-weight: 800;
  color: #FFFFFF;
`

export const Delete_Info = styled.div`
  margin-top: 30px;
  width: 240px;
  height: 18px;
  font-size: 15px;
  color: #FFFFFF;
`

export const Password = styled.input`
  width: 300px;
  height: 50px;
  padding : 15px 0px 15px 15px;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 11px;
`

export const Button_Box = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
`

export const Delete_button = styled.input`
  width: 140px;
  height: 50px;
  background-color: #f29a2e;
  border-radius: 50px;
  color: #FFFFFF;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  border: none;
`

export const Cancle_button = styled.input`
  width: 140px;
  height: 50px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  border-radius: 50px;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  border: none;

`




