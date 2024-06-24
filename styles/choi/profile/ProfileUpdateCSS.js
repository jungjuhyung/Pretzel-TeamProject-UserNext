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
  font-weight: 600;
  color: #FFFFFF;
`

export const Profile_Box = styled.div`
  margin-top: 102px;
  width: 692px;
  height: 300px;
  display: flex;
`

export const Profile_img =  styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`

export const Profile_Info = styled.div`
  margin-left: 92px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px 0px 5px 0px;
`

export const Profile_name = styled.div`
  width: 52px;
  height: 24px;
  font-size: 20px;
  color: #FFFFFF;
`

export const Profile_name_input = styled.input`
  width: 300px;
  height: 50px;
  background-color: #252525;
`

export const Profile_Image = styled.div`
  width: 92px;
  height: 24px;
  font-size: 20px;
  color: #FFFFFF;
`

export const Profile_image_Upload = styled.input`
  display: none;
`

export const CustomUploadButton = styled.label`
  margin-top: 16px;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 17px;
  border-radius: 5px;
  background-color: #252525;
  cursor: pointer;
  
  img {
    width: 24px;
    height: 24px;
  }
`